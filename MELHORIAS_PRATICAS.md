# Melhorias Práticas - Guia de Implementação

Este documento contém melhorias práticas e código pronto para implementar no projeto ParalelusRPG.

---

## 🚀 Melhoria 1: Padronizar Estado de Campanha no Service

### Objetivo
Tornar o estado de campanha consistente com o padrão usado em personagem, permitindo acesso global ao estado.

### Implementação

#### 1. Atualizar `CampanhaService`

```typescript
// src/app/core/service/campanha.service.ts

import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Campanha } from '../models/campanha';
import { API_URL_CAMP } from '../contants/api';
import { map, Observable } from 'rxjs';
import { CampanhaDTO } from '../models/dtos/campanha-dto';
import { ApiResponse } from '../responses/api-response';

@Injectable({
  providedIn: 'root'
})
export class CampanhaService {
  // ✅ ADICIONAR: Signal para campanha atual (similar ao PersonagemService)
  campanha = signal<Campanha | null>(null);

  private readonly http = inject(HttpClient)

  constructor() { }

  // ✅ ADICIONAR: Métodos para gerenciar estado da campanha
  setCampanha(campanha: Campanha) {
    this.campanha.set(campanha);
  }

  resetCampanha() {
    this.campanha.set(null);
  }

  getCampanhaAtual(): Campanha | null {
    return this.campanha();
  }

  // Métodos existentes...
  public getListaCampanhas() {
    return this.http.get<CampanhaDTO[]>(`${API_URL_CAMP}/listar`).pipe(map(result =>
      result.map(campanha => new Campanha().fromDTO(campanha)
      )));
  }

  public getListaCampanhasAtivas(): Observable<Campanha[]> {
    return this.http.get<CampanhaDTO[]>(`${API_URL_CAMP}/listar/ativas`).pipe(map(result =>
      result.map(campanha => new Campanha().fromDTO(campanha))
    ));
  }

  public postCriarCampanha(dto: CampanhaDTO): Observable<Campanha> {
    return this.http.post<ApiResponse<CampanhaDTO>>(`${API_URL_CAMP}/criar`, dto).pipe(map(result =>
      new Campanha().fromDTO(result.data)
    ));
  }

  public postUploadCapa(id: number, file: File): Observable<string> {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post<ApiResponse<string>>(`${API_URL_CAMP}/${id}/upload-capa`, formData).pipe(map(res =>
      res.data
    ));
  }
}
```

#### 2. Implementar `entrarEmCampanha()` no `HomeCampanhaComponent`

```typescript
// src/app/features/campanha/home-campanha/home-campanha.component.ts

public entrarEmCampanha() {
  const campanha = this.campanhaSelecionada();
  if (campanha) {
    // ✅ Salva campanha no service (padrão consistente com personagem)
    this.capanhaService.setCampanha(campanha);
    
    // ✅ Navega para tela de detalhes da campanha
    // Você precisará criar esta rota e componente
    this.route.navigate(['/campanha/detalhes']);
    
    // Alternativa: se ainda não tiver rota de detalhes, pode usar query params
    // this.route.navigate(['/campanha'], { queryParams: { id: campanha.id } });
  } else {
    this.modal.openModalError('Selecione uma campanha primeiro');
  }
}
```

#### 3. Atualizar `CriacaoCampanhaComponent` para fechar e notificar

```typescript
// src/app/features/campanha/criacao-campanha/criacao-campanha.component.ts

public criarCampanha() {
  const dto = this.montarDTO();
  this.campanhaService.postCriarCampanha(dto).subscribe({
    next: (campanha) => {
      const file = this.imagemCortada();
      if (file) {
        this.campanhaService.postUploadCapa(campanha.id, file).subscribe({
          next: () => {
            // ✅ Passa a campanha criada ao fechar
            this.ref.close(campanha);
          },
          error: err => {
            console.error("Erro ao enviar capa", err);
            // Mesmo com erro na capa, fecha com a campanha criada
            this.ref.close(campanha);
          }
        });
      } else {
        this.ref.close(campanha);
      }
    },
    error: err => {
      console.error("Erro ao criar campanha", err);
      this.ref.close(null); // Fecha sem campanha em caso de erro
    }
  });
}
```

#### 4. Atualizar `HomeCampanhaComponent` para recarregar após criar

```typescript
// src/app/features/campanha/home-campanha/home-campanha.component.ts

public criarCampanha() {
  const config = new DynamicDialogConfig();
  config.width = '35%';
  config.height = '85%';
  config.modal = true,
  config.contentStyle = { overflow: 'auto' },
  
  const ref = this.dialog.open(CriacaoCampanhaComponent, config);
  
  // ✅ Recarrega lista quando campanha é criada
  ref.onClose.subscribe((campanhaCriada: Campanha | null) => {
    if (campanhaCriada) {
      this.buscarCampanhas(); // Recarrega a lista
    }
  });
}
```

---

## 🔄 Melhoria 2: Atualizar Lista Automaticamente

### Objetivo
Garantir que a lista de campanhas seja atualizada após criar uma nova campanha.

### Implementação Completa

```typescript
// src/app/features/campanha/home-campanha/home-campanha.component.ts

// ... código existente ...

public criarCampanha() {
  const config = new DynamicDialogConfig();
  config.width = '35%';
  config.height = '85%';
  config.modal = true;
  config.contentStyle = { overflow: 'auto' };
  
  const ref = this.dialog.open(CriacaoCampanhaComponent, config);
  
  // ✅ Escuta quando o dialog fecha
  ref.onClose.subscribe((campanhaCriada: Campanha | null) => {
    if (campanhaCriada) {
      // Recarrega lista de campanhas
      this.buscarCampanhas();
      
      // Opcional: Seleciona automaticamente a campanha criada
      // this.campanhaSelecionada.set(campanhaCriada);
    }
  });
}
```

---

## 🎯 Melhoria 3: Criar Componente de Detalhes da Campanha

### Objetivo
Criar uma tela dedicada para visualizar e gerenciar uma campanha específica.

### Implementação

#### 1. Criar rota para detalhes

```typescript
// src/app/features/campanha/campanhas.route.ts

import { Routes } from '@angular/router';
import { HomeCampanhaComponent } from './home-campanha/home-campanha.component';
import { CriacaoCampanhaComponent } from './criacao-campanha/criacao-campanha.component';
import { DetalhesCampanhaComponent } from './detalhes-campanha/detalhes-campanha.component'; // ✅ Novo componente

export const campanhasRoute: Routes = [
  {
    path: '',
    component: HomeCampanhaComponent
  },
  {
    path: 'detalhes',
    component: DetalhesCampanhaComponent // ✅ Nova rota
  }
];
```

#### 2. Criar componente `DetalhesCampanhaComponent`

```typescript
// src/app/features/campanha/detalhes-campanha/detalhes-campanha.component.ts

import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CampanhaService } from 'src/app/core/service/campanha.service';
import { Campanha } from 'src/app/core/models/campanha';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-detalhes-campanha',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    AvatarModule,
    DividerModule
  ],
  templateUrl: './detalhes-campanha.component.html',
  styleUrl: './detalhes-campanha.component.scss'
})
export class DetalhesCampanhaComponent implements OnInit {
  private readonly campanhaService = inject(CampanhaService);
  private readonly router = inject(Router);

  // ✅ Lê campanha do service
  public readonly campanha = computed(() => this.campanhaService.campanha());

  ngOnInit(): void {
    // ✅ Verifica se há campanha selecionada
    if (!this.campanha()) {
      // Se não houver, redireciona para lista
      this.router.navigate(['/campanha']);
    }
  }

  voltarParaLista() {
    this.campanhaService.resetCampanha();
    this.router.navigate(['/campanha']);
  }
}
```

#### 3. Template do componente

```html
<!-- src/app/features/campanha/detalhes-campanha/detalhes-campanha.component.html -->

@if (campanha(); as campanhaAtual) {
  <div class="container-detalhes">
    <div class="header">
      <h1>{{ campanhaAtual.nome }}</h1>
      <p-button label="Voltar" icon="pi pi-arrow-left" (onClick)="voltarParaLista()" />
    </div>

    <div class="capa">
      <img [src]="getImagemCapa()" [alt]="campanhaAtual.nome" />
    </div>

    <div class="introducao">
      <h2>Introdução</h2>
      <p>{{ campanhaAtual.introducao }}</p>
    </div>

    <p-divider />

    <div class="detalhes">
      <div class="info-item">
        <i class="pi pi-bolt"></i>
        <span>Mestre: {{ campanhaAtual.mestre?.nome }}</span>
      </div>
      <div class="info-item">
        <i class="pi pi-users"></i>
        <span>Jogadores: {{ campanhaAtual.jogadores?.length }}/10</span>
      </div>
      <div class="info-item">
        <i class="pi pi-bullseye"></i>
        <span>Nível: {{ campanhaAtual.nivel }}</span>
      </div>
    </div>

    <p-divider />

    <div class="jogadores">
      <h3>Jogadores</h3>
      @for (jogador of campanhaAtual.jogadores; track jogador.id) {
        <div class="card-jogador">
          <p-avatar [label]="jogador.nome.charAt(0).toUpperCase()" shape="circle" />
          <span>{{ jogador.nome }}</span>
        </div>
      }
    </div>
  </div>
} @else {
  <div class="sem-campanha">
    <p>Nenhuma campanha selecionada</p>
    <p-button label="Voltar para Lista" (onClick)="voltarParaLista()" />
  </div>
}
```

---

## 🔔 Melhoria 4: Sistema de Notificações com Subject

### Objetivo
Criar um sistema centralizado para notificar mudanças de estado entre componentes.

### Implementação

```typescript
// src/app/core/service/notification.service.ts

import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface NotificationEvent {
  type: 'campanha-criada' | 'campanha-atualizada' | 'personagem-criado' | 'personagem-atualizado';
  data?: any;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications$ = new Subject<NotificationEvent>();

  notify(event: NotificationEvent) {
    this.notifications$.next(event);
  }

  getNotifications(): Observable<NotificationEvent> {
    return this.notifications$.asObservable();
  }
}
```

#### Uso no `CampanhaService`:

```typescript
// src/app/core/service/campanha.service.ts

import { NotificationService } from './notification.service';

export class CampanhaService {
  private readonly notificationService = inject(NotificationService);

  public postCriarCampanha(dto: CampanhaDTO): Observable<Campanha> {
    return this.http.post<ApiResponse<CampanhaDTO>>(`${API_URL_CAMP}/criar`, dto).pipe(
      map(result => {
        const campanha = new Campanha().fromDTO(result.data);
        
        // ✅ Notifica que campanha foi criada
        this.notificationService.notify({
          type: 'campanha-criada',
          data: campanha
        });
        
        return campanha;
      })
    );
  }
}
```

#### Escutar no `HomeCampanhaComponent`:

```typescript
// src/app/features/campanha/home-campanha/home-campanha.component.ts

import { NotificationService } from 'src/app/core/service/notification.service';

export class HomeCampanhaComponent implements OnInit {
  private readonly notificationService = inject(NotificationService);

  ngOnInit(): void {
    this.buscarCampanhas();
    
    // ✅ Escuta notificações de campanha criada
    this.notificationService.getNotifications().subscribe(event => {
      if (event.type === 'campanha-criada') {
        this.buscarCampanhas(); // Recarrega lista
      }
    });
  }
}
```

---

## ⚡ Melhoria 5: Cache de Dados com Expiração

### Objetivo
Reduzir requisições desnecessárias ao servidor usando cache com tempo de expiração.

### Implementação

```typescript
// src/app/core/service/campanha.service.ts

export class CampanhaService {
  private campanhasCache = signal<Campanha[]>([]);
  private cacheTimestamp = 0;
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

  public getListaCampanhasAtivas(forceRefresh = false): Observable<Campanha[]> {
    const now = Date.now();
    const cacheValid = (now - this.cacheTimestamp) < this.CACHE_DURATION;
    
    // ✅ Retorna cache se válido e não forçado refresh
    if (!forceRefresh && cacheValid && this.campanhasCache().length > 0) {
      return of(this.campanhasCache());
    }
    
    // ✅ Busca do servidor e atualiza cache
    return this.http.get<CampanhaDTO[]>(`${API_URL_CAMP}/listar/ativas`).pipe(
      map(result => {
        const campanhas = result.map(c => new Campanha().fromDTO(c));
        this.campanhasCache.set(campanhas);
        this.cacheTimestamp = now;
        return campanhas;
      })
    );
  }

  // ✅ Método para invalidar cache quando necessário
  invalidarCache() {
    this.cacheTimestamp = 0;
    this.campanhasCache.set([]);
  }
}
```

#### Uso:

```typescript
// Forçar refresh após criar campanha
this.campanhaService.postCriarCampanha(dto).subscribe({
  next: (campanha) => {
    this.campanhaService.invalidarCache(); // Invalida cache
    this.buscarCampanhas(); // Busca novamente
  }
});
```

---

## 🎨 Melhoria 6: Loading State Global

### Objetivo
Melhorar feedback visual durante operações assíncronas.

### Implementação

```typescript
// src/app/core/service/loader.service.ts

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading = signal<boolean>(false);
  message = signal<string>('');

  show(message = 'Carregando...') {
    this.message.set(message);
    this.isLoading.set(true);
  }

  hide() {
    this.isLoading.set(false);
    this.message.set('');
  }
}
```

#### Usar no componente:

```typescript
// src/app/features/campanha/home-campanha/home-campanha.component.ts

import { LoaderService } from 'src/app/core/service/loader.service';

export class HomeCampanhaComponent {
  private readonly loaderService = inject(LoaderService);

  public buscarCampanhas() {
    this.loaderService.show('Carregando campanhas...');
    
    this.capanhaService.getListaCampanhasAtivas().subscribe({
      next: (result) => {
        this.campanhas.set(result);
        this.loaderService.hide();
      },
      error: (error) => {
        this.modal.openModalError(error);
        this.loaderService.hide();
      }
    });
  }
}
```

#### Template para exibir loading:

```html
<!-- Adicionar em app.component.html ou layout principal -->
@if (loaderService.isLoading()) {
  <div class="loader-overlay">
    <div class="loader-spinner"></div>
    <p>{{ loaderService.message() }}</p>
  </div>
}
```

---

## 📝 Resumo das Mudanças Necessárias

### Arquivos a Modificar:

1. ✅ `src/app/core/service/campanha.service.ts`
   - Adicionar `campanha` signal
   - Adicionar `setCampanha()`, `resetCampanha()`, `getCampanhaAtual()`
   - Opcional: Adicionar cache

2. ✅ `src/app/features/campanha/home-campanha/home-campanha.component.ts`
   - Implementar `entrarEmCampanha()`
   - Atualizar `criarCampanha()` para escutar fechamento do dialog

3. ✅ `src/app/features/campanha/criacao-campanha/criacao-campanha.component.ts`
   - Atualizar `criarCampanha()` para passar campanha ao fechar
   - Atualizar `fecharCriacao()` para passar campanha

### Arquivos a Criar:

1. ✅ `src/app/features/campanha/detalhes-campanha/detalhes-campanha.component.ts`
2. ✅ `src/app/features/campanha/detalhes-campanha/detalhes-campanha.component.html`
3. ✅ `src/app/features/campanha/detalhes-campanha/detalhes-campanha.component.scss`
4. ✅ `src/app/core/service/notification.service.ts` (opcional)
5. ✅ `src/app/core/service/loader.service.ts` (opcional)

---

## ✅ Checklist de Implementação

- [ ] Adicionar signal `campanha` no `CampanhaService`
- [ ] Implementar métodos `setCampanha()`, `resetCampanha()`, `getCampanhaAtual()`
- [ ] Completar método `entrarEmCampanha()` no `HomeCampanhaComponent`
- [ ] Atualizar `CriacaoCampanhaComponent` para passar campanha ao fechar
- [ ] Atualizar `HomeCampanhaComponent` para recarregar lista após criar
- [ ] Criar componente `DetalhesCampanhaComponent`
- [ ] Adicionar rota para detalhes da campanha
- [ ] Testar fluxo completo: criar → selecionar → entrar → visualizar detalhes

---

**Próximo passo:** Começar pela Melhoria 1, que é a mais crítica e estabelece o padrão para o resto do projeto.

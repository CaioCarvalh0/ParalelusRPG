# Arquitetura e Fluxos do Projeto ParalelusRPG

## 📋 Índice
1. [Fluxo de Autenticação](#fluxo-de-autenticação)
2. [Fluxo de Personagem](#fluxo-de-personagem)
3. [Fluxo de Campanha](#fluxo-de-campanha)
4. [Arquitetura Atual](#arquitetura-atual)
5. [Sugestões de Melhorias](#sugestões-de-melhorias)

---

## 🔐 Fluxo de Autenticação

### 1. Criação de Usuário (Cadastro)

**Componente:** `CadastroComponent` (`src/app/features/forms/cadastro/`)

**Fluxo:**
1. Usuário preenche formulário com:
   - Nome
   - Login
   - Email
   - Senha
   - Confirmação de senha

2. Validação:
   - Validação de formulário reativo (ReactiveFormsModule)
   - Validador customizado `senhasIguaisValidator` verifica se senhas coincidem
   - Validação de email

3. Verificação de usuário existente:
   ```typescript
   checkUserValido() → authService.verificaUserCadastro()
   ```
   - Envia `UsuarioDTO` para API (`/auth/checkcadastro`)
   - Se sucesso → prossegue para cadastro
   - Se erro → exibe modal de erro

4. Cadastro:
   ```typescript
   cadastrarUsario() → authService.register(RegisterDTO)
   ```
   - Envia `RegisterDTO` para API (`/auth/register`)
   - Não faz login automático após cadastro
   - Exibe modal de sucesso
   - Redireciona para `/login`

**Armazenamento:** Nenhum dado é persistido localmente após cadastro

---

### 2. Login

**Componente:** `LoginComponent` (`src/app/features/forms/login/`)

**Fluxo:**
1. Verificação inicial:
   - Se já autenticado (`authService.isAuthenticated()`) → redireciona para `/home`

2. Preenchimento de credenciais:
   - Login (username)
   - Senha

3. Autenticação:
   ```typescript
   Login() → authService.login(LoginDTO)
   ```
   - Envia `LoginDTO` para API (`/auth/login`)
   - Retorna `ApiResponse<TokenDTO>` contendo:
     - `token`: JWT token
     - `user`: Objeto `Usuario` completo

4. Armazenamento (no `AuthenticationService`):
   ```typescript
   setTokenOnLocalStorage(token) → localStorage.setItem('token', token)
   setCurrentUser(usuario) → localStorage.setItem('currentUser', JSON.stringify(usuario))
   ```
   - Token armazenado em `localStorage` com chave `'token'`
   - Usuário armazenado em `localStorage` com chave `'currentUser'`
   - `BehaviorSubject` atualizado com usuário atual

5. Pós-login:
   - Verifica se token foi salvo
   - Exibe modal de sucesso
   - Redireciona para `/home`

**Interceptors:**
- `TokenInterceptorService`: Adiciona `Authorization: Bearer {token}` em todas as requisições HTTP
- `ErrorInterceptorService`: Trata erros HTTP
- `LoaderInterceptorService`: Gerencia loading state

**Guards:**
- `AuthGuard`: Protege rotas verificando `isAuthenticated()` (verifica se token existe no localStorage)

---

## 👤 Fluxo de Personagem

### 1. Listagem de Personagens

**Componente:** `PersonagensComponent` (`src/app/features/personagens/personagens/`)

**Fluxo:**
1. Inicialização (`ngOnInit`):
   ```typescript
   buscarListaPersonagens() → personagemService.getPersonagemOfUsuario(userId)
   ```
   - Busca todos os personagens do usuário logado
   - API: `GET /personagens/usuario/{usuarioId}`
   - Retorna array de `PersonagemDTO[]` convertido para `Personagem[]`
   - Atualiza `listaPersonagens` signal

2. Exibição:
   - Renderiza `CardPersonagemComponent` para cada personagem
   - Card é clicável → chama `editarPersonagem(personagem)`

---

### 2. Criação/Edição de Personagem

**Componente:** `FichaComponent` (`src/app/features/personagens/ficha/`)

**Fluxo de Criação:**
1. Navegação:
   ```typescript
   novoPersonagem() → personagemService.resetPersonagem() → router.navigate(['/personagens/ficha'])
   ```
   - Reseta signal do service para `new Personagem()`
   - Navega para rota de ficha

2. Inicialização do formulário:
   - `ngOnInit`: Carrega dados necessários (perícias, raças, etc.)
   - `setPersonagemOnForm()`: Lê `personagemService.personagem()` signal
   - Se `personagem.id === 0` → modo criação (formulário vazio)
   - Se `personagem.id !== 0` → modo edição (preenche formulário)

**Fluxo de Edição:**
1. Seleção:
   ```typescript
   editarPersonagem(personagem) → personagemService.setPersonagem(personagem) → router.navigate(['/personagens/ficha'])
   ```
   - **Armazena personagem no service** usando `signal.set()`
   - Navega para ficha

2. Preenchimento:
   - `setPersonagemOnForm()` lê do service e preenche formulário
   - Todos os campos são populados (atributos, raça, caminhos, etc.)

**Salvamento:**
```typescript
salvarPersonagem() → montaJsonDTO() → personagemService.postSalvarPersonagem(PersonagemDTO)
```
1. Monta `PersonagemDTO` com dados do formulário
2. Envia para API (`POST /personagens/salvar`)
3. Se houver imagem cortada:
   - Faz upload (`POST /personagens/{id}/upload-capa`)
4. Exibe modal de sucesso

**Estado no Service:**
- `PersonagemService.personagem`: Signal que mantém o personagem atual
- Usado como "estado global" entre componentes
- Persiste durante navegação (até ser resetado ou substituído)

---

## 🎲 Fluxo de Campanha

### 1. Listagem de Campanhas

**Componente:** `HomeCampanhaComponent` (`src/app/features/campanha/home-campanha/`)

**Fluxo:**
1. Inicialização:
   ```typescript
   buscarCampanhas() → campanhaService.getListaCampanhasAtivas()
   ```
   - API: `GET /campanha/listar/ativas`
   - Retorna array de `CampanhaDTO[]` convertido para `Campanha[]`
   - Atualiza `campanhas` signal

2. Exibição:
   - Renderiza `CardCampanhaComponent` para cada campanha
   - Card possui evento `(selecionar)` que emite `Campanha`

3. Seleção:
   ```typescript
   campanhaSelecionada.set($event) // Quando card é clicado
   ```
   - **Armazena campanha selecionada apenas no componente** (signal local)
   - Abre drawer lateral com detalhes da campanha

---

### 2. Criação de Campanha

**Componente:** `CriacaoCampanhaComponent` (`src/app/features/campanha/criacao-campanha/`)

**Fluxo:**
1. Abertura:
   ```typescript
   criarCampanha() → dialog.open(CriacaoCampanhaComponent)
   ```
   - Abre modal (DynamicDialog) com formulário

2. Preenchimento:
   - Nome da campanha
   - Introdução (textarea)
   - Nível (0-30)
   - Capa (opcional, com recorte de imagem)

3. Criação:
   ```typescript
   criarCampanha() → montarDTO() → campanhaService.postCriarCampanha(CampanhaDTO)
   ```
   - Monta `CampanhaDTO` com:
     - `mestre`: Usuário atual (`authService.currentUser`)
     - `ativa`: true
     - `jogadores`: [] (vazio inicialmente)
   - API: `POST /campanha/criar`
   - Se houver capa → upload (`POST /campanha/{id}/upload-capa`)
   - Fecha modal

**Observação:** Após criar, a lista de campanhas **não é atualizada automaticamente**

---

### 3. Entrar em Campanha (INACABADO)

**Estado Atual:**
```typescript
public entrarEmCampanha() {
  // VAZIO - não implementado
}
```

**O que deveria fazer:**
- Salvar campanha selecionada no `CampanhaService` (similar ao `PersonagemService`)
- Navegar para tela interna da campanha
- Permitir acesso aos dados da campanha em outros componentes

---

## 🏗️ Arquitetura Atual

### Estrutura de Pastas

```
src/app/
├── core/
│   ├── contants/          # Constantes (API URLs, tema)
│   ├── guards/            # AuthGuard
│   ├── interceptor/       # HTTP Interceptors
│   ├── models/            # Modelos de dados
│   │   ├── dtos/          # DTOs para API
│   │   └── *.ts           # Classes de domínio
│   ├── responses/          # Tipos de resposta da API
│   └── service/           # Services (lógica de negócio)
├── features/
│   ├── campanha/          # Módulo de campanhas
│   ├── forms/             # Login e Cadastro
│   ├── home/              # Home page
│   ├── livro/             # Livro de regras
│   ├── painel-usuario/    # Painel do usuário
│   └── personagens/       # Módulo de personagens
└── shared/
    ├── cards/             # Componentes de card
    └── loader/            # Componente de loading
```

### Padrões Utilizados

#### 1. **State Management com Signals**
- Angular Signals para estado reativo
- Services com signals para estado compartilhado:
  - `PersonagemService.personagem`: Signal<Personagem>
  - `AuthenticationService.currentUser$`: BehaviorSubject<Usuario>

#### 2. **Service Pattern**
- Services injetáveis (`providedIn: 'root'`)
- Separação de responsabilidades:
  - `AuthenticationService`: Autenticação e usuário
  - `PersonagemService`: CRUD de personagens + estado atual
  - `CampanhaService`: CRUD de campanhas (sem estado atual)

#### 3. **DTO Pattern**
- Conversão entre DTOs (API) e Models (domínio)
- Métodos `fromDTO()` nas classes de modelo
- Exemplo: `Personagem.fromDTO()`, `Campanha.fromDTO()`

#### 4. **Interceptor Pattern**
- `TokenInterceptorService`: Adiciona token automaticamente
- `ErrorInterceptorService`: Tratamento centralizado de erros
- `LoaderInterceptorService`: Loading state global

#### 5. **Guard Pattern**
- `AuthGuard`: Proteção de rotas autenticadas

### Armazenamento de Estado

#### LocalStorage
- `token`: JWT token de autenticação
- `currentUser`: Usuário logado (JSON stringificado)

#### Signals/BehaviorSubject (Memória)
- `PersonagemService.personagem`: Personagem sendo editado/criado
- `AuthenticationService.currentUserSubject`: Usuário atual (BehaviorSubject)

#### Estado Local de Componentes
- `HomeCampanhaComponent.campanhaSelecionada`: Campanha selecionada (signal local)
- `PersonagensComponent.listaPersonagens`: Lista de personagens (signal local)

### Fluxo de Dados

```
API ←→ Service ←→ Component ←→ Template
         ↓
    LocalStorage (token, user)
    Signals (estado compartilhado)
```

---

## 💡 Sugestões de Melhorias

### 1. **Padronizar Estado de Campanha**

**Problema Atual:**
- Personagem usa service para estado global
- Campanha usa apenas signal local no componente
- Inconsistência de padrão

**Solução:**
Adicionar signal no `CampanhaService` similar ao `PersonagemService`:

```typescript
// campanha.service.ts
export class CampanhaService {
  campanha = signal<Campanha | null>(null);
  
  setCampanha(campanha: Campanha) {
    this.campanha.set(campanha);
  }
  
  resetCampanha() {
    this.campanha.set(null);
  }
  
  getCampanhaAtual(): Campanha | null {
    return this.campanha();
  }
}
```

**Implementação em `HomeCampanhaComponent`:**
```typescript
public entrarEmCampanha() {
  const campanha = this.campanhaSelecionada();
  if (campanha) {
    this.capanhaService.setCampanha(campanha);
    this.route.navigate(['/campanha/detalhes']); // ou rota apropriada
  }
}
```

**Benefícios:**
- Consistência com padrão de personagem
- Estado acessível em qualquer componente
- Facilita navegação e compartilhamento de dados

---

### 2. **Atualizar Lista Após Criação**

**Problema Atual:**
- Após criar campanha, lista não atualiza automaticamente
- Usuário precisa recarregar página manualmente

**Solução A: Refresh Manual**
```typescript
// CriacaoCampanhaComponent
public fecharCriacao() {
  this.ref.close(true); // Passa flag de sucesso
}

// HomeCampanhaComponent
public criarCampanha() {
  const ref = this.dialog.open(CriacaoCampanhaComponent, config);
  ref.onClose.subscribe((criada: boolean) => {
    if (criada) {
      this.buscarCampanhas(); // Recarrega lista
    }
  });
}
```

**Solução B: Observable/Subject para Notificações**
```typescript
// CampanhaService
private campanhaCriada$ = new Subject<Campanha>();

campanhaCriada() {
  return this.campanhaCriada$.asObservable();
}

// Após criar
this.campanhaCriada$.next(campanha);

// HomeCampanhaComponent
ngOnInit() {
  this.campanhaService.campanhaCriada().subscribe(() => {
    this.buscarCampanhas();
  });
}
```

---

### 3. **Melhorar Gerenciamento de Estado**

**Problema Atual:**
- Estado espalhado entre services e componentes
- Sem persistência de estado entre recarregamentos (exceto token/user)

**Solução: Implementar State Management Centralizado**

**Opção A: Service com Signals (Recomendado para projeto atual)**
```typescript
// app-state.service.ts
@Injectable({ providedIn: 'root' })
export class AppStateService {
  // Estado global
  personagemAtual = signal<Personagem | null>(null);
  campanhaAtual = signal<Campanha | null>(null);
  usuarioAtual = signal<Usuario | null>(null);
  
  // Actions
  setPersonagemAtual(personagem: Personagem) {
    this.personagemAtual.set(personagem);
    this.salvarEstado(); // Opcional: persistir
  }
  
  private salvarEstado() {
    // Salvar no localStorage se necessário
  }
  
  private carregarEstado() {
    // Carregar do localStorage se necessário
  }
}
```

**Opção B: NgRx (Para projetos maiores)**
- Store centralizado
- Actions e Reducers
- Efeitos para side effects
- Maior complexidade, mas mais escalável

---

### 4. **Melhorar Tratamento de Erros**

**Problema Atual:**
- Erros tratados apenas com modais
- Sem feedback visual consistente
- Erros de rede não são tratados adequadamente

**Solução:**
```typescript
// error-handler.service.ts
@Injectable({ providedIn: 'root' })
export class ErrorHandlerService {
  private errors$ = new Subject<ErrorInfo>();
  
  handleError(error: any, context?: string) {
    const errorInfo: ErrorInfo = {
      message: this.extractMessage(error),
      code: error.status,
      context
    };
    this.errors$.next(errorInfo);
    this.modalService.openModalError(errorInfo.message);
  }
  
  private extractMessage(error: any): string {
    if (error.error?.mensagem) return error.error.mensagem;
    if (error.message) return error.message;
    return 'Erro desconhecido';
  }
}
```

---

### 5. **Adicionar Loading States**

**Problema Atual:**
- `LoaderInterceptorService` existe mas não há feedback visual consistente
- Usuário não sabe quando operações estão em andamento

**Solução:**
```typescript
// loader.service.ts
@Injectable({ providedIn: 'root' })
export class LoaderService {
  isLoading = signal<boolean>(false);
  
  show() {
    this.isLoading.set(true);
  }
  
  hide() {
    this.isLoading.set(false);
  }
}

// Usar em componentes
this.loaderService.show();
this.campanhaService.postCriarCampanha(dto).subscribe({
  next: () => this.loaderService.hide(),
  error: () => this.loaderService.hide()
});
```

---

### 6. **Implementar Cache de Dados**

**Problema Atual:**
- Dados são buscados toda vez que componente é inicializado
- Múltiplas requisições desnecessárias

**Solução:**
```typescript
// campanha.service.ts
private campanhasCache = signal<Campanha[]>([]);
private cacheTimestamp = 0;
private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

public getListaCampanhasAtivas(forceRefresh = false): Observable<Campanha[]> {
  const now = Date.now();
  const cacheValid = (now - this.cacheTimestamp) < this.CACHE_DURATION;
  
  if (!forceRefresh && cacheValid && this.campanhasCache().length > 0) {
    return of(this.campanhasCache());
  }
  
  return this.http.get<CampanhaDTO[]>(`${API_URL_CAMP}/listar/ativas`).pipe(
    map(result => {
      const campanhas = result.map(c => new Campanha().fromDTO(c));
      this.campanhasCache.set(campanhas);
      this.cacheTimestamp = now;
      return campanhas;
    })
  );
}
```

---

### 7. **Melhorar Navegação e Rotas**

**Problema Atual:**
- Rotas hardcoded como strings
- Sem tipagem de rotas
- Navegação pode quebrar com refatoração

**Solução:**
```typescript
// app.routes.ts
export const ROUTES = {
  LOGIN: '/login',
  CADASTRO: '/cadastro',
  HOME: '/home',
  PERSONAGENS: '/personagens',
  PERSONAGEM_FICHA: '/personagens/ficha',
  CAMPANHA: '/campanha',
  CAMPANHA_DETALHES: '/campanha/detalhes',
} as const;

// Usar
this.router.navigate([ROUTES.PERSONAGEM_FICHA]);
```

---

### 8. **Adicionar Validações de Formulário**

**Problema Atual:**
- Validações básicas existem, mas podem ser melhoradas
- Sem feedback visual de campos inválidos

**Solução:**
```typescript
// Usar validators customizados
form = this.fb.group({
  nome: ['', [Validators.required, Validators.minLength(3)]],
  nivel: [0, [Validators.min(0), Validators.max(30)]],
});

// Exibir erros no template
@if (form.get('nome')?.invalid && form.get('nome')?.touched) {
  <small class="error">Nome é obrigatório e deve ter no mínimo 3 caracteres</small>
}
```

---

### 9. **Implementar Refresh Token**

**Problema Atual:**
- Token armazenado sem expiração visível
- Sem renovação automática de token

**Solução:**
```typescript
// authentication.service.ts
refreshToken(): Observable<string> {
  return this.http.post<ApiResponse<TokenDTO>>(`${API_URL_AUTH}/refresh`, {
    token: localStorage.getItem('token')
  }).pipe(
    map(result => {
      this.setTokenOnLocalStorage(result.data.token);
      return result.data.token;
    })
  );
}

// Interceptor pode chamar refresh automaticamente em 401
```

---

### 10. **Adicionar Testes**

**Problema Atual:**
- Arquivos `.spec.ts` foram deletados
- Sem cobertura de testes

**Solução:**
- Reintroduzir testes unitários para services
- Testes de componentes críticos
- Testes de integração para fluxos principais

---

## 📝 Resumo das Melhorias Prioritárias

### Alta Prioridade
1. ✅ **Implementar `setCampanha()` no `CampanhaService`** (similar ao personagem)
2. ✅ **Completar `entrarEmCampanha()`** salvando no service e navegando
3. ✅ **Atualizar lista após criar campanha**

### Média Prioridade
4. ⚠️ Melhorar tratamento de erros
5. ⚠️ Adicionar loading states visíveis
6. ⚠️ Implementar cache de dados

### Baixa Prioridade
7. 📋 State management centralizado (se projeto crescer)
8. 📋 Refresh token
9. 📋 Testes automatizados

---

## 🎯 Próximos Passos Recomendados

1. **Implementar estado de campanha no service:**
   - Adicionar `campanha` signal no `CampanhaService`
   - Implementar `setCampanha()` e `resetCampanha()`
   - Atualizar `entrarEmCampanha()` para usar o service

2. **Criar rota de detalhes da campanha:**
   - Criar componente `CampanhaDetalhesComponent`
   - Adicionar rota `/campanha/detalhes`
   - Carregar campanha do service ao inicializar

3. **Melhorar feedback visual:**
   - Adicionar loading spinner durante operações
   - Melhorar mensagens de erro
   - Adicionar confirmações para ações destrutivas

4. **Documentar APIs:**
   - Criar interface de documentação das APIs
   - Documentar DTOs e modelos
   - Adicionar comentários JSDoc nos services

---

**Documento criado em:** 2026-02-04
**Versão do Projeto:** feature/campanha

import { Component, computed, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModule } from 'primeng/button';
import { MatButtonModule } from '@angular/material/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { TextareaModule } from 'primeng/textarea';
import { RecorteComponent } from 'src/app/shared/recorte/recorte.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CampanhaService } from 'src/app/service/campanha.service';
import { Campanha } from 'src/app/models/campanha';
import { CampanhaDTO } from 'src/app/dto/campanha-dto';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-criacao-campanha',
  templateUrl: './criacao-campanha.component.html',
  styleUrls: ['./criacao-campanha.component.scss'],
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    ButtonModule,
    InputTextModule,
    FloatLabel,
    TextareaModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CriacaoCampanhaComponent {
  private readonly authService = inject(AuthenticationService)
  private readonly campanhaService = inject(CampanhaService)
  private readonly dialog = inject(MatDialog)
  private fb = inject(FormBuilder);
  form = this.fb.group({
    nome: [''],
    introducao: [''],
    capa: [null]
  });

  public readonly maxLevel = 30;
  public lvlCampanha = signal(0);
  public readonly adiciona = computed(() => this.lvlCampanha() < this.maxLevel);
  public readonly remove = computed(() => this.lvlCampanha() > 0);
  public readonly imagemCortada = signal<string | null>(null);
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  
  constructor() {

  }

  abrirSeletorDeImagem() {
    this.fileInput.nativeElement.click();
  }

  selecionarImagem(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const arquivo = input.files[0];
      this.converterParaBase64(arquivo);
    }
  }

  converterParaBase64(arquivo: File) {
    const reader = new FileReader();
    reader.onload = () => {
      const imagemBase64 = reader.result as string;
      this.abrirModalRecorte(imagemBase64);
    };
    reader.readAsDataURL(arquivo);
  }

  abrirModalRecorte(imagemBase64: string) {
    const dialogRef = this.dialog.open(RecorteComponent, {
      data: {
        imagemOriginal: imagemBase64,
        aspectRatio: 16 / 9,
      },
      width: '400px',
      height: 'auto',
      panelClass: 'custom-modal'
    });

    dialogRef.afterClosed().subscribe((imagemRecortada: string | null) => {
      if (imagemRecortada) {
        this.imagemCortada.set(imagemRecortada);
      }
    });
  }

  alterarNivel(acao: 'add' | 'remove') {
    const nivelAtual = this.lvlCampanha();
    if (acao === 'add' && nivelAtual < this.maxLevel) {
      this.lvlCampanha.set(nivelAtual + 1);
    }
    if (acao === 'remove' && nivelAtual > 0) {
      this.lvlCampanha.set(nivelAtual - 1);
    }
  }

  criarCampanha() {
    this.converterBlobParaBase64(this.imagemCortada()).then((imagemBase64) => {
      this.imagemCortada.set(imagemBase64);
      this.campanhaService.postCriarCampanha(this.montarDTO()).pipe().subscribe({
        next: (campanha) => {
          this.fecharCriacao()
        }
      })
    })
  }

  montarDTO(): CampanhaDTO {
    return {
      id: 0,
      nome: this.form.value.nome || '',
      introducao: this.form.value.introducao || '',
      capaBase64: this.imagemCortada()?.split(',')[1] || null,
      ativa: true,
      nivel: this.lvlCampanha(),
      jogadores: [],
      mestre: this.authService.currentUser
    }
  }

  fecharCriacao() {
    this.dialog.closeAll();
  }

  converterBlobParaBase64(blobUrl: string | null): Promise<string | null> {
    return new Promise((resolve, reject) => {
      if (!blobUrl) {
        resolve(null);
        return;
      }
      fetch(blobUrl)
        .then(response => response.blob())
        .then(blob => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
        .catch(reject);
    });
  }

}

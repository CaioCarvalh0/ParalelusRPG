import { Component, computed, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModule } from 'primeng/button';
import { MatButtonModule } from '@angular/material/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { TextareaModule } from 'primeng/textarea';
import { RecorteComponent } from 'src/app/shared/recorte/recorte.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { CampanhaService } from 'src/app/core/service/campanha.service';
import { CampanhaDTO } from 'src/app/core/models/dtos/campanha-dto';
import { Campanha } from 'src/app/core/models/campanha';
import { IftaLabelModule } from 'primeng/iftalabel';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ModalService } from 'src/app/core/service/modal.service';

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
    ReactiveFormsModule,
    IftaLabelModule
  ]
})
export class CriacaoCampanhaComponent {
  private readonly authService = inject(AuthenticationService)
  private readonly campanhaService = inject(CampanhaService)
  private readonly ref = inject(DynamicDialogRef)
  private readonly dialog = inject(MatDialog)
  private readonly modal = inject(ModalService)
  private fb = inject(FormBuilder);

  private readonly currentUser = this.authService.currentUser;

  form = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    introducao: ['', [Validators.required, Validators.minLength(12)]],
    capa: [null]
  });

  public readonly maxLevel = 30;
  public lvlCampanha = signal(0);
  public readonly adiciona = computed(() => this.lvlCampanha() < this.maxLevel);
  public readonly remove = computed(() => this.lvlCampanha() > 0);
  public readonly imagemCortada = signal<File | null>(null);
  public readonly salvando = signal(false);
  public readonly imagemPreview = computed(() => {
    const file = this.imagemCortada();
    if (file) {
      return URL.createObjectURL(file);
    }
    return null;
  });
  public readonly nomeInvalido = computed(() => !!this.form.controls.nome.invalid && !!this.form.controls.nome.touched);
  public readonly introducaoInvalida = computed(() => !!this.form.controls.introducao.invalid && !!this.form.controls.introducao.touched);
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  constructor() { }

  private montarDTO(): CampanhaDTO {
    return {
      id: 0,
      nome: this.form.value.nome || '',
      introducao: this.form.value.introducao || '',
      capaUrl: "",
      ativa: true,
      nivel: this.lvlCampanha(),
      jogadores: [],
      mestre: this.currentUser()!.userDto()
    }
  }

  public abrirSeletorDeImagem() {
    this.fileInput.nativeElement.click();
  }

  public selecionarImagem(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const arquivo = input.files[0];
      this.converterParaBase64(arquivo);
    }
  }

  public converterParaBase64(arquivo: File) {
    const reader = new FileReader();
    reader.onload = () => {
      const imagemBase64 = reader.result as string;
      this.abrirModalRecorte(imagemBase64);
    };
    reader.readAsDataURL(arquivo);
  }

  public abrirModalRecorte(imagemBase64: string) {
    const dialogRef = this.dialog.open(RecorteComponent, {
      data: {
        imagemOriginal: imagemBase64,
        aspectRatio: 16 / 9,
      },
      width: '400px',
      height: 'auto',
      panelClass: 'custom-modal'
    });

    dialogRef.afterClosed().subscribe((imagemRecortada: File | null) => {
      if (imagemRecortada) {
        this.imagemCortada.set(imagemRecortada);
      }
    });
  }

  public alterarNivel(acao: 'add' | 'remove') {
    const nivelAtual = this.lvlCampanha();
    if (acao === 'add' && nivelAtual < this.maxLevel) {
      this.lvlCampanha.set(nivelAtual + 1);
    }
    if (acao === 'remove' && nivelAtual > 0) {
      this.lvlCampanha.set(nivelAtual - 1);
    }
  }

  public criarCampanha() {
    this.form.markAllAsTouched();
    if (this.form.invalid || this.salvando()) {
      return;
    }

    const dto = this.montarDTO();
    this.salvando.set(true);
    this.campanhaService.postCriarCampanha(dto).subscribe({
      next: (campanha) => {
        const file = this.imagemCortada();
        if (file) {
          this.campanhaService.postUploadCapa(campanha.id, file).subscribe({
            next: () => {
              campanha.capa = `/uploads/campanhas/${campanha.id}.png`;
              this.modal.openModalSuccess('Campanha criada com sucesso.');
              this.fecharCriacao(campanha);
            },
            error: () => {
              this.salvando.set(false);
              this.modal.openModalError('A campanha foi criada, mas houve erro ao enviar a capa.');
              this.fecharCriacao(campanha);
            }
          });
        } else {
          this.modal.openModalSuccess('Campanha criada com sucesso.');
          this.fecharCriacao(campanha);
        }
      },
      error: () => {
        this.salvando.set(false);
        this.modal.openModalError('Nao foi possivel criar a campanha.');
      }
    });
  }

  public fecharCriacao(campanha?: Campanha) {
    this.salvando.set(false);
    this.ref.close(campanha);
  }

}

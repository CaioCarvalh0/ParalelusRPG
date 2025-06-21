import { ChangeDetectorRef, Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { ProgressBar } from 'primeng/progressbar';
import { RacaService } from '../../service/raca.service';
import { Raca } from '../../models/raca';
import { PericiaService } from '../../service/pericia.service';
import { Pericia } from '../../models/pericia';
import { SelectModule } from 'primeng/select';
import { Caminho } from '../../models/caminho';
import { Arquetipo } from '../../models/arquetipo';
import { CaminhoService } from '../../service/caminho.service';
import { ArquetipoService } from '../../service/arquetipo.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RecorteComponent } from '../../shared/recorte/recorte.component';
import { TextareaModule } from 'primeng/textarea';
import { AtributoEnum } from '../../enums/atributo.enum';
import { Atributos } from '../../models/atributos';
import { PersonagemDTO } from '../../dto/salvar.personagem-dto';
import { AuthenticationService } from '../../service/authentication.service';
import { Usuario } from '../../models/usuario';
import { PersonagemService } from '../../service/personagem.service';
import { ModalService } from '../../service/modal.service';
import { Personagem } from '../../models/personagem';
import { Singularidade } from '../../models/singularidade';
import { CommonModule } from '@angular/common';
import { SingularidadeEnum } from '../../enums/singularidade.enum';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ProgressBar,
    SelectModule,
    FormsModule,
    ButtonModule,
    MatDialogModule,
    TextareaModule,
    ReactiveFormsModule
  ]
})
export class FichaComponent implements OnInit {
  atributoMap: Record<AtributoEnum, keyof typeof this.atributos> = {
    [AtributoEnum.Forca]: 'forca',
    [AtributoEnum.Agilidade]: 'agilidade',
    [AtributoEnum.Intelecto]: 'intelecto',
    [AtributoEnum.Poder]: 'poder',
    [AtributoEnum.Sanidade]: 'sanidade',
    [AtributoEnum.Resistencia]: 'resistencia'
  };
  form: FormGroup
  usuario: Usuario = new Usuario()
  personagem: Personagem = new Personagem()
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  imagemCortada = signal<string | null>(null);
  atributoEnum = AtributoEnum
  singularidadeEnum = SingularidadeEnum
  atributos: Atributos = new Atributos()
  singularidade: Singularidade = new Singularidade()
  listaRaca: Raca[] = []
  listaPericia: Pericia[] = []
  listaCaminho: Caminho[] = []
  listaArquetipo: Arquetipo[] = []
  listaCaminhoArquetipo: Arquetipo[] = []
  listaArquetipoSelecionado: Arquetipo[] = []
  listaCaminhoSelecionado: Caminho[] = []
  caminho: Caminho = new Caminho()
  arquetipo: Arquetipo = new Arquetipo()
  maxvida: number = 100
  vidaatual: number = 100
  maxmana: number = 100
  manaatual: number = 100
  editandoVida = false;
  editandoMana = false;
  defesa: number = 0
  inventario: string = ""
  cibernetica: string = ""
  atributoMax = 5;
  atributoMin = -1;

  private racaService = inject(RacaService)
  private periciaService = inject(PericiaService)
  private caminhoService = inject(CaminhoService)
  private arquetipoService = inject(ArquetipoService)
  private dialog = inject(MatDialog)
  private formBuilder = inject(FormBuilder);
  private authService = inject(AuthenticationService)
  private personagemService = inject(PersonagemService)
  private modalService = inject(ModalService)

  constructor() {
    this.authService.currentUser$.subscribe(user => {
      this.usuario = user
    })
    this.form = this.formBuilder.group({
      nome: [''],
      raca: [''],
      level: [''],
      caracteristicas: [''],
    })

  }

  ngOnInit(): void {
    //TODO: Melhorar a inicialização do personagem
    this.racaService.getListaRacas().subscribe((result) => {
      this.listaRaca = result
    })

    this.caminhoService.getListaCaminhos().subscribe((result) => {
      this.listaCaminho = result
    })

    this.arquetipoService.getListaArquetipos().subscribe((result) => {
      this.listaArquetipo = result
    })
    
    this.periciaService.getListaPericias().subscribe((result) => {
      this.listaPericia = result
      this.listaPericia.forEach(p => { p.pontos = 0 })
      this.setPersonagemOnForm()
    })
  }

  addPontosAtributo(atributo: AtributoEnum) {
    const chave = this.atributoMap[atributo];
    const valor = this.atributos[chave];
    if (valor < this.atributoMax) {
      this.atributos[chave]++;
    }
  }

  removePontosAtributo(event: MouseEvent, atributo: AtributoEnum) {
    event.preventDefault();
    const chave = this.atributoMap[atributo];
    const valor = this.atributos[chave];
    if (valor > this.atributoMin) {
      this.atributos[chave]--;
    }
  }

  addPontosSingularidade(singularidade: SingularidadeEnum) {
    switch (singularidade) {
      case SingularidadeEnum.Criacao:
        this.singularidade.criacao++
        break
      case SingularidadeEnum.Manipulacao:
        this.singularidade.manipulacao++
        break
      case SingularidadeEnum.Ampliacao:
        this.singularidade.ampliacao++
        break
      case SingularidadeEnum.Difusao:
        this.singularidade.difusao++
        break
      case SingularidadeEnum.Corporeo:
        this.singularidade.corporeo++
        break
      case SingularidadeEnum.Espacial:
        this.singularidade.espacial++
    }
  }

  removePontosSingularidade(event: MouseEvent, singularidade: SingularidadeEnum) {
    event.preventDefault()
    switch (singularidade) {
      case SingularidadeEnum.Criacao:
        if (this.singularidade.criacao > 0) {
          this.singularidade.criacao--
        }
        break
      case SingularidadeEnum.Manipulacao:
        if (this.singularidade.manipulacao > 0) {
          this.singularidade.manipulacao--
        }
        break
      case SingularidadeEnum.Ampliacao:
        if (this.singularidade.ampliacao > 0) {
          this.singularidade.ampliacao--
        }
        break
      case SingularidadeEnum.Difusao:
        if (this.singularidade.difusao > 0) {
          this.singularidade.difusao--
        }
        break
      case SingularidadeEnum.Corporeo:
        if (this.singularidade.corporeo > 0) {
          this.singularidade.corporeo--
        }
        break
      case SingularidadeEnum.Espacial:
        if (this.singularidade.espacial > 0) {
          this.singularidade.espacial--
        }
    }
  }

  addPontosPericia(pericia: Pericia) {
    let index = this.listaPericia.findIndex(p => p.id == pericia.id)
    if (this.listaPericia[index].pontos < 3) {
      this.listaPericia[index].pontos++
    }
  }

  removePontosPericia(event: MouseEvent, pericia: Pericia) {
    event.preventDefault()
    let index = this.listaPericia.findIndex(p => p.id == pericia.id)
    if (this.listaPericia[index].pontos > 0) {
      this.listaPericia[index].pontos--
    }
  }

  addPontosDefesa() {
    if (this.defesa < 50) this.defesa++
  }

  removePontosDefesa(event: MouseEvent) {
    event.preventDefault()
    if (this.defesa > 0) this.defesa--
  }

  selectCaminho() {
    if (this.caminho.id != 0 && !this.listaCaminhoSelecionado.includes(this.caminho)) {
      this.listaCaminhoSelecionado.push(this.caminho)
      this.fillListArquetipo()
    }
  }

  selectArquetipo() {
    if (this.arquetipo.id != 0 && !this.listaArquetipoSelecionado.includes(this.arquetipo)) {
      this.listaArquetipoSelecionado.push(this.arquetipo)
    }
  }

  fillListArquetipo() {
    this.listaCaminhoArquetipo = []
    this.listaCaminhoArquetipo = this.listaArquetipo.filter(arquetipo => arquetipo.caminho.id == this.caminho.id)
  }

  removeCaminho(caminho: Caminho) {
    this.listaCaminhoSelecionado = this.listaCaminhoSelecionado.filter(c => c.id != caminho.id)
    this.removeArquetiposCaminho(caminho)
  }

  removeArquetiposCaminho(caminho: Caminho) {
    this.listaArquetipoSelecionado = this.listaArquetipoSelecionado.filter(a => a.caminho.id != caminho.id)
  }

  removeArquetipo(arquetipo: Arquetipo) {
    this.listaArquetipoSelecionado = this.listaArquetipoSelecionado.filter(a => a.id != arquetipo.id)
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
      data: { imagemOriginal: imagemBase64 },
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


  addPontosVida() {
    if (this.vidaatual < this.maxvida) {
      this.vidaatual++
    }
  }

  addPontosVidaMax() {
    this.maxvida++
  }

  removePontosVida() {
    if (this.vidaatual > 0) {
      this.vidaatual--
    }
  }

  removePontosVidaMax() {
    if (this.maxvida > 0) {
      this.maxvida--
    }
  }

  addPontosMana() {
    if (this.manaatual < this.maxmana) {
      this.manaatual++
    }
  }

  addPontosManaMax() {
    this.maxmana++
  }

  removePontosMana() {
    if (this.manaatual > 0) {
      this.manaatual--
    }
  }

  removePontosManaMax() {
    if (this.maxmana > 0) {
      this.maxmana--
    }
  }

  salvarVida() {
    this.vidaatual = Math.max(0, Math.min(this.vidaatual, this.maxvida));
    this.editandoVida = false;
  }

  salvarMana() {
    this.manaatual = Math.max(0, Math.min(this.manaatual, this.maxmana));
    this.editandoMana = false;
  }

  salvarPersonagem() {
    this.converterBlobParaBase64(this.imagemCortada()).then(base64 => {
      this.imagemCortada.set(base64);
      const personagemDTO = this.montaJsonDTO();
      this.personagemService.postSalvarPersonagem(personagemDTO).subscribe((result) => {
        this.modalService.openModalSuccess(result.mensagem);
        this.personagemService.setPersonagem(new Personagem().fromDTO(result.data));
      });
    }).catch(err => this.modalService.openModalError("Erro ao converter Imagem: " + err.message));
  }

  montaJsonDTO(): PersonagemDTO {
    let personagemDTO: PersonagemDTO = {
      id: this.personagem.id,
      nome: this.form.get('nome')!.value,
      usuario: this.usuario,
      raca: this.form.get('raca')!.value,
      caminho: this.listaCaminhoSelecionado,
      arquetipo: this.listaArquetipoSelecionado,
      pericias: this.listaPericia,
      atributos: this.atributos,
      vidaMax: this.maxvida,
      vidaAtual: this.vidaatual,
      energiaMax: this.maxmana,
      energiaAtual: this.manaatual,
      defesa: Number(this.defesa) || 0,
      inventario: this.inventario,
      singularidade: this.singularidade,
      imagemBase64: this.imagemCortada()?.split(',')[1] || null,
      caracteristica: this.form.get('caracteristicas')!.value,
      level: this.form.get('level')!.value,
      cibernetica: this.cibernetica,
      historia: this.personagem.historia
    }
    console.log('personagemDTO', personagemDTO.pericias)
    return personagemDTO
  }


  setPersonagemOnForm() {
    this.personagem = this.personagemService.personagem()
    if (this.personagem.id != 0) {
      this.form.get('nome')!.setValue(this.personagem.nome)
      this.form.get('raca')!.setValue(this.personagem.raca)
      this.form.get('level')!.setValue(this.personagem.level)
      this.form.get('caracteristicas')!.setValue(this.personagem.caracteristicas)
      this.listaCaminhoSelecionado = this.personagem.caminho
      this.listaArquetipoSelecionado = this.personagem.arquetipo
      this.listaPericia = this.personagem.pericia.length > 0 ? this.personagem.pericia : this.listaPericia;
      this.atributos = this.personagem.atributos
      this.maxvida = this.personagem.maxvida
      this.vidaatual = this.personagem.vidaatual
      this.maxmana = this.personagem.maxmana
      this.manaatual = this.personagem.manaatual
      this.defesa = this.personagem.defesa
      this.inventario = this.personagem.inventario
      this.cibernetica = this.personagem.cibernetica
      this.singularidade = this.personagem.singularidade
      if (this.personagem.imagem) {
        this.imagemCortada.set(`data:image/png;base64,${this.personagem.imagem}`)
      }
    }
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

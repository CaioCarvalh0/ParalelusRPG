import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { ProgressBar } from 'primeng/progressbar';
import { RacaService } from '../service/raca.service';
import { Raca } from '../models/raca';
import { PericiaService } from '../service/pericia.service';
import { Pericia } from '../models/pericia';
import { SelectModule } from 'primeng/select';
import { Caminho } from '../models/caminho';
import { Arquetipo } from '../models/arquetipo';
import { CaminhoService } from '../service/caminho.service';
import { ArquetipoService } from '../service/arquetipo.service';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RecorteComponent } from '../shared/recorte/recorte.component';
import { TextareaModule } from 'primeng/textarea';
import { AtributoEnum } from '../enums/atributo.enum';
import { Atributos } from '../models/atributos';

interface PontosPericia {
  pericia: Pericia;
  pontos: number;
}

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss'],
  standalone: true,
  imports: [
    ProgressBar,
    SelectModule,
    FormsModule,
    ButtonModule,
    MatDialogModule,
    TextareaModule
  ]
})
export class FichaComponent implements OnInit {

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  imagemCortada = signal<string | null>(null);

  atributoEnum = AtributoEnum

  atributos: Atributos = new Atributos()

  listaRaca: Raca[] = []

  listaPericia: Pericia[] = []
  listaPontosPericia: PontosPericia[] = []

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

  private racaService = inject(RacaService)
  private periciaService = inject(PericiaService)
  private caminhoService = inject(CaminhoService)
  private arquetipoService = inject(ArquetipoService)
  private dialog = inject(MatDialog)

  constructor() {
  }

  ngOnInit(): void {
    this.racaService.getListaRacas().subscribe((result) => {
      this.listaRaca = result
    })

    this.periciaService.getListaPericias().subscribe((result) => {
      this.listaPericia = result
      this.addListaPericiaOnPericiaPontos()
    })

    this.caminhoService.getListaCaminhos().subscribe((result) => {
      this.listaCaminho = result
    })

    this.arquetipoService.getListaArquetipos().subscribe((result) => {
      this.listaArquetipo = result
    })
  }






  addPontosAtributo(atributo: AtributoEnum) {
    switch (atributo) {
      case AtributoEnum.Forca:
        if(this.atributos.forca < 5)
          this.atributos.forca++
        break
      case AtributoEnum.Agilidade:
        if(this.atributos.agilidade < 5)
          this.atributos.agilidade++
        break
      case AtributoEnum.Intelecto:
        if(this.atributos.intelecto < 5)
          this.atributos.intelecto++
        break
      case AtributoEnum.Poder:
        if(this.atributos.poder < 5)
          this.atributos.poder++
        break
      case AtributoEnum.Sanidade:
        if(this.atributos.sanidade < 5)
        this.atributos.sanidade++
        break
      case AtributoEnum.Resistencia:
        if(this.atributos.resistencia < 5)
        this.atributos.resistencia++
    }
  }

  removePontosAtributo(event: MouseEvent, atributo: AtributoEnum) {
    event.preventDefault()
    switch (atributo) {
      case AtributoEnum.Forca:
        if (this.atributos.forca > -1) {
          this.atributos.forca--
        }
        break
      case AtributoEnum.Agilidade:
        if (this.atributos.agilidade > -1) {
          this.atributos.agilidade--
        }
        break
      case AtributoEnum.Intelecto:
        if (this.atributos.intelecto > -1) {
          this.atributos.intelecto--
        }
        break
      case AtributoEnum.Poder:
        if (this.atributos.poder > -1) {
          this.atributos.poder--
        }
        break
      case AtributoEnum.Sanidade:
        if (this.atributos.sanidade > -1) {
          this.atributos.sanidade--
        }
        break
      case AtributoEnum.Resistencia:
        if (this.atributos.resistencia > -1) {
          this.atributos.resistencia--
        }
    }
  }

  addPontosPericia(pericia: Pericia) {
    let index = this.listaPontosPericia.findIndex(p => p.pericia.id == pericia.id)
    if (this.listaPontosPericia[index].pontos < 3) {
      this.listaPontosPericia[index].pontos++
    }
  }

  removePontosPericia(event: MouseEvent, pericia: Pericia) {
    event.preventDefault()
    let index = this.listaPontosPericia.findIndex(p => p.pericia.id == pericia.id)
    if (this.listaPontosPericia[index].pontos > 0) {
      this.listaPontosPericia[index].pontos--
    }
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


  addListaPericiaOnPericiaPontos() {
    this.listaPericia.forEach(pericia => {
      this.listaPontosPericia.push({ pericia: pericia, pontos: 0 })
    })
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
      width: 'auto',
      height: 'auto',
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

}

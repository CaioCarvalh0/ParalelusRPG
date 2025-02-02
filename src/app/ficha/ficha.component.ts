import { Component, inject, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-ficha',  
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss'],
  standalone: true,
  imports: [
    ProgressBar,
    SelectModule,
    FormsModule,
    ButtonModule
  ]
})
export class FichaComponent implements OnInit {

  listaRaca: Raca[] = []
  listaPericia: Pericia[] = []
  listaCaminho: Caminho[] = []
  listaArquetipo: Arquetipo[] = []
  listaCaminhoArquetipo: Arquetipo[] = []
  
  listaArquetipoSelecionado: Arquetipo[] = []
  listaCaminhoSelecionado: Caminho[] = []

  caminho: Caminho = new Caminho()
  arquetipo: Arquetipo = new Arquetipo()

  maxvida = 90
  vidaatual = 30

  private racaService = inject(RacaService)
  private periciaService = inject(PericiaService)
  private caminhoService = inject(CaminhoService)
  private arquetipoService = inject(ArquetipoService)

  constructor() {
  }

  ngOnInit(): void {


    this.racaService.getListaRacas().subscribe((result) => {
      this.listaRaca = result
    })

    this.periciaService.getListaPericias().subscribe((result) => {
      this.listaPericia = result
    })

    this.caminhoService.getListaCaminhos().subscribe((result) => {
      this.listaCaminho = result
    })

    this.arquetipoService.getListaArquetipos().subscribe((result) => {
      this.listaArquetipo = result
    })

  }

  selectCaminho() {
    if (this.caminho.id != 0 && !this.listaCaminhoSelecionado.includes(this.caminho)) {
      this.listaCaminhoSelecionado.push(this.caminho)
      this.fillListArquetipo()
    }
  }

  selectArquetipo() {
    console.log(this.arquetipo)
    if (this.arquetipo.id != 0 && !this.listaArquetipoSelecionado.includes(this.arquetipo)) {
      this.listaArquetipoSelecionado.push(this.arquetipo)
      console.log(this.listaArquetipoSelecionado)
    }

  }

  fillListArquetipo() {
    this.listaCaminhoArquetipo = []
    this.listaCaminhoArquetipo = this.listaArquetipo.filter(arquetipo => arquetipo.caminho.id == this.caminho.id)
  }

  removeCaminho(caminho: Caminho){
    this.listaCaminhoSelecionado = this.listaCaminhoSelecionado.filter(c => c.id != caminho.id)
    this.removeArquetiposCaminho(caminho)
  }

  removeArquetiposCaminho(caminho: Caminho){
    this.listaArquetipoSelecionado = this.listaArquetipoSelecionado.filter(a => a.caminho.id != caminho.id)
  }

  removeArquetipo(arquetipo: Arquetipo){
    this.listaArquetipoSelecionado = this.listaArquetipoSelecionado.filter(a => a.id != arquetipo.id)
  }


}

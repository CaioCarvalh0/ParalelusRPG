import { Component } from '@angular/core';

@Component({
    selector: 'app-criacao-campanha',
    templateUrl: './criacao-campanha.component.html',
    styleUrls: ['./criacao-campanha.component.scss'],
    standalone: false
})
export class CriacaoCampanhaComponent {
  lvlCampanha: number = 0
  JogsCampanha: number = 0




  addLvl(){
    if(this.lvlCampanha >= 0 && this.lvlCampanha < 30){
      this.lvlCampanha = this.lvlCampanha + 1
    }
  }
  removeLvl(){
    if(this.lvlCampanha > 0){
      this.lvlCampanha = this.lvlCampanha - 1
    }
  }

  addJog(){
    if(this.JogsCampanha >= 0){
      this.JogsCampanha = this.JogsCampanha + 1
    }
  }
  removeJog(){
    if(this.JogsCampanha > 0){
      this.JogsCampanha = this.JogsCampanha - 1
    }
  }

}

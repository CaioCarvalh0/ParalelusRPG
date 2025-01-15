import { Component } from '@angular/core';

@Component({
    selector: 'app-criacao-campanha',
    templateUrl: './criacao-campanha.component.html',
    styleUrls: ['./criacao-campanha.component.scss'],
    standalone: false
})
export class CriacaoCampanhaComponent {
  lvlCampanha: number = 0
 
  constructor() { 

  }

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

}

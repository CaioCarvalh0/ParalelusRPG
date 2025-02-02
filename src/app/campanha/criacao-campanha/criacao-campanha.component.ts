import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-criacao-campanha',
    templateUrl: './criacao-campanha.component.html',
    styleUrls: ['./criacao-campanha.component.scss'],
    standalone: true,
    imports: [
      MatIconModule,
       
    ]
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

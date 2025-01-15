import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false,
})
export class AppComponent implements OnInit {
  title = 'rpgParalelus';

  ngOnInit(): void {
    
  }
}

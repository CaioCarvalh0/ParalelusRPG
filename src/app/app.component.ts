import { Component, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { MenuComponent } from './shared/menu/menu.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoaderService } from './core/service/loader.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
    MenuComponent,
    RouterModule,
    LoaderComponent
]
})
export class AppComponent implements OnInit {
  title = 'rpgParalelus';
  
  loaderService = inject(LoaderService)

  ngOnInit(): void {
    
  }
}

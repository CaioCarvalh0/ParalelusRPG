
import { Component, inject } from '@angular/core';
import { LoaderService } from 'src/app/service/loader.service';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {

  loaderService = inject(LoaderService)

}


import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { Usuario } from 'src/app/core/models/usuario';

@Component({
    selector: 'app-painel-usuario',
    templateUrl: './painel-usuario.component.html',
    styleUrls: ['./painel-usuario.component.scss'],
    standalone: true,
    imports: [
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    FormsModule,
    InputGroupModule,
    InputGroupAddonModule
]
})
export class PainelUsuarioComponent implements OnInit {
    usuario: Usuario = new Usuario()
    private authService = inject(AuthenticationService)
    
    constructor() { 
        this.authService.currentUser$.subscribe(usuario => {
            this.usuario = usuario;
        })
    }

    ngOnInit() {
    }


}

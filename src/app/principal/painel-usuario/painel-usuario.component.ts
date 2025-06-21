import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
@Component({
    selector: 'app-painel-usuario',
    templateUrl: './painel-usuario.component.html',
    styleUrls: ['./painel-usuario.component.scss'],
    standalone: true,
    imports: [
        CommonModule, ButtonModule, IconFieldModule, InputIconModule, FormsModule,
        InputGroupModule, InputGroupAddonModule
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

import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalEnum } from 'src/app/enums/modal';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    standalone: true,
    imports: [
        CommonModule, 
    ]
})
export class ModalComponent implements OnInit{
    data = inject(MAT_DIALOG_DATA);
    mensagem?: string;
    tipo?: ModalEnum; 
    constructor() {
        this.mensagem = this.data.mensagem;
        this.tipo = this.data.tipo;
    }

    ngOnInit(): void {
        
    }
}

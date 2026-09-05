import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalEnum } from 'src/app/core/enums/modal';

interface ModalData {
  mensagem: string;
  tipo: ModalEnum;
  durationMs?: number;
}

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
    ]
})
export class ModalComponent implements OnInit, OnDestroy {
    private readonly dialogRef = inject(MatDialogRef<ModalComponent>);
    private readonly data = inject<ModalData>(MAT_DIALOG_DATA);
    private closeTimeoutId: ReturnType<typeof setTimeout> | null = null;

    mensagem = '';
    tipo?: ModalEnum;
    durationMs = 4200;

    constructor() {
        this.mensagem = this.data.mensagem;
        this.tipo = this.data.tipo;
        this.durationMs = this.data.durationMs ?? 4200;
    }

    ngOnInit(): void {
        this.closeTimeoutId = setTimeout(() => {
            this.dialogRef.close();
        }, this.durationMs);
    }

    ngOnDestroy(): void {
        if (this.closeTimeoutId) {
            clearTimeout(this.closeTimeoutId);
        }
    }

    close() {
        this.dialogRef.close();
    }
}

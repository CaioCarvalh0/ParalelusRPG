import { Component, computed, EventEmitter, Inject, inject, Input, OnInit, Output, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ImageCropperComponent, ImageCroppedEvent } from 'ngx-image-cropper';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-recorte',
  imports: [
    ImageCropperComponent,
    ButtonModule
  ],
  templateUrl: './recorte.component.html',
  styleUrl: './recorte.component.scss'
})
export class RecorteComponent implements OnInit {
  @Input() imagemOriginal!: string;
  imagemCortada: File | null = null;
  aspectRatio: number = 1

  constructor(
    private dialogRef: MatDialogRef<RecorteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }

  ngOnInit() {
    this.imagemOriginal = this.data.imagemOriginal;
    if (this.data.aspectRatio) {
      this.aspectRatio = this.data.aspectRatio;
    }
  }

  cortarImagem(event: ImageCroppedEvent) {
    if (event.blob) {
      this.imagemCortada = new File([event.blob], "imagem.png", { type: "image/png" });
    }
  }

  salvar() {
    this.dialogRef.close(this.imagemCortada);
  }

  cancelar() {
    this.dialogRef.close(null);
  }
}

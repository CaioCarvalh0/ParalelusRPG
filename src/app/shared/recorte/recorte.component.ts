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
  imagemCortadaBase64: string | null = null;

  constructor(
    private dialogRef: MatDialogRef<RecorteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.imagemOriginal = this.data.imagemOriginal;
  }

  cortarImagem(event: ImageCroppedEvent) {
    if (event.blob) {
      this.converterBlobParaArquivo(event.blob);
    } else if (event.base64) {
      this.imagemCortadaBase64 = event.base64;
    }
  }
  
  converterBlobParaArquivo(blob: Blob) {
    const file = new File([blob], "imagem.png", { type: "image/png" });
    this.imagemCortadaBase64 = URL.createObjectURL(file);
  }

  salvar() {
    if (this.imagemCortadaBase64) {
      this.dialogRef.close(this.imagemCortadaBase64);
    } else {
      this.dialogRef.close(null);
    }
  }

  cancelar() {
    this.dialogRef.close(null);
  }
}

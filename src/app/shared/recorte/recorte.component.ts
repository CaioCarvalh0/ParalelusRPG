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
    if (event.base64) {
      this.imagemCortadaBase64 = event.base64;
    } else if (event.blob) {
      this.converterBlobParaBase64(event.blob);
    }
  }
  
  converterBlobParaBase64(blob: Blob) {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      this.imagemCortadaBase64 = reader.result as string;
    };
  }

  salvar() {
    if (this.imagemCortadaBase64) {
      const base64SemPrefixo = this.imagemCortadaBase64.split(",")[1];
      this.dialogRef.close(base64SemPrefixo);
    } else {
      this.dialogRef.close(null);
    }
  }

  cancelar() {
    this.dialogRef.close(null);
  }
}

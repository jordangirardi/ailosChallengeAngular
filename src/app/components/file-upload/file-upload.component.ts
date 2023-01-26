import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  @Input() isNecessary: boolean = true;
  protected necessaryText: string = this.isNecessary
    ? 'Obrigatório'
    : 'Opcional';
}

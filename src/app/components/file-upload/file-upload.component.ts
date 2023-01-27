import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DocumentTypeComponent } from '../dialogs/document-type/document-type.component';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  @Input() isNecessary: boolean = true;
  @Input() isValidateDocumentType: boolean = true;

  @ViewChild('fileInput') fileInput!: ElementRef;

  protected imgUploadedSrc: string = '';
  protected necessaryText: string = this.isNecessary
    ? 'Obrigatório'
    : 'Opcional';

  constructor(private dialog: MatDialog) {}

  protected confirmDocumentType(): void {
    if (this.isValidateDocumentType) {
      const dialogRef = this.dialog.open(DocumentTypeComponent, {
        data: { documentType: null },
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log(result); //tipo de doc escolhido
        if (result.documentType !== null) {
          this.fileInput.nativeElement.click();
        }
      });
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  protected handleFileChange(event: any): void {
    const file = event.target.files.item(0);
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      if (reader.result) {
        this.imgUploadedSrc = reader.result.toString();
      }
    };
  }
}

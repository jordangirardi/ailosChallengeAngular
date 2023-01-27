import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-document-type',
  templateUrl: './document-type.component.html',
  styleUrls: ['./document-type.component.scss'],
})
export class DocumentTypeComponent {
  constructor(
    public dialogRef: MatDialogRef<DocumentTypeComponent>,
    @Inject(MAT_DIALOG_DATA) public documentType: number
  ) {}

  protected closeDialog(): void {
    this.dialogRef.close(this.documentType);
  }

  protected setDocumentType(documentType: number): void {
    this.documentType = documentType;
    this.closeDialog();
  }
}

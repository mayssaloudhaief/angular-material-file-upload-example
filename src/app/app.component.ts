import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'Choose File';

  uploadFileEvt(fileInput: any) {
    const selectedFile = fileInput.target.files && fileInput.target.files[0];

    if (selectedFile) {
      this.fileAttr = selectedFile.name;

      // Check if the selected file is a PDF
      if (selectedFile.type === 'application/pdf') {
        // Handle PDF file
        this.readPdf(selectedFile);
      } else {
        console.error('Invalid file type. Please choose a PDF file.');
        // Reset if a file of an invalid type is selected
        this.fileInput.nativeElement.value = '';
        this.fileAttr = 'Choose File';
      }
    } else {
      this.fileAttr = 'Choose File';
    }
  }

  readPdf(pdfFile: File) {
    console.log('Selected File:', pdfFile);

    console.log('PDF File Name:', pdfFile.name);

  
    
  }
}

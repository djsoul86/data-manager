import { Component, OnInit } from '@angular/core';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-cargararchivos',
  templateUrl: './cargararchivos.component.html',
  styleUrls: ['./cargararchivos.component.css']
})
export class CargararchivosComponent implements OnInit {
  fileToUpload: File = null;
  constructor(public cargara_service:ServiceService) { }

  ngOnInit() {
  }

  onSubmitCreate(event: Event) {
    event.preventDefault();
    this.cargara_service.create(this.fileToUpload)
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

}

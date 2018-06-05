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
  cards = [
    { val: '1', viewValue: 'Visa' },
    { val: '2', viewValue: 'Master' },
    { val: '3', viewValue: 'Citi' }
  ];
  selectedCard:string;
  ngOnInit() {
  }

  onSubmitCreate(event: Event) {
    event.preventDefault();
    this.cargara_service.create(this.fileToUpload,this.selectedCard)
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

}

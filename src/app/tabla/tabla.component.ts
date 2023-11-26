import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { cutmachine } from '../models/cutmachine.interface';





@Component({
  selector: 'tabla-component',
  styleUrls: ['tabla.component.css'],
  templateUrl: 'tabla.component.html',
  standalone: true,
  imports: [MatTableModule],
})
export class TablaComponent {
  data: cutmachine[] = [];
  datasource = new MatTableDataSource(this.data);
  displayedColumns: string[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.apiService.getData("2").subscribe(
      (retData: any) => {
        //If data is an array
        if (Array.isArray(retData)) {
          console.log('Datos de array cargados exitosamente:', retData);
          this.datasource.data = retData;
          this.displayedColumns = Object.keys(retData[0]);
        }
        else if (retData) {
          console.log('Datos JSON cargados exitosamente:', retData);
          this.datasource.data = retData;
        } else {
          console.error('La estructura del JSON no es la esperada.');
        }
      },
      (error) => {
        console.error('Error al obtener datos desde la API', error);
      }
    );
  }
}

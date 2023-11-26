import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from '../services/api.service';
import { cutmachine } from '../models/cutmachine.interface';
import { TablefilterComponent } from '../tablefilter/tablefilter.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'tabla-component',
  styleUrls: ['tabla.component.css'],
  templateUrl: 'tabla.component.html',
  standalone: true,
  imports: [
    MatTableModule,
    TablefilterComponent,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
})
export class TablaComponent implements AfterViewInit {
  constructor(
    private apiService: ApiService,
    private sharedService: SharedService
  ) {}

  data: cutmachine[] = [];
  datasource = new MatTableDataSource(this.data);
  displayedColumns: string[] = [];
  mtype: String = '2';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
  }

  ngOnInit() {
    this.loadData(this.mtype);
    this.sharedService.parameters$.subscribe((parametro) => {
      this.mtype = parametro;
      if (this.mtype) this.loadData(parametro);

    });
  }

  loadData(machineType: String) {
    this.apiService.getData(machineType).subscribe(
      (retData: any) => {
        //If data is an array
        if (Array.isArray(retData)) {
          console.log('Data loaded ;)', retData);
          this.datasource.data = retData;
          this.displayedColumns = Object.keys(retData[0]);
        } else if (retData) {
          console.log('JSON Data loaded ;)', retData);
          this.datasource.data = retData;
        } else {
          console.error('Not valid JSON :,(');
        }
      },
      (error) => {
        console.error('API connection error', error);
      }
    );
  }
}

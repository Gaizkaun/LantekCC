import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { machinetype } from '../models/cutmachine.interface';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { SharedService } from '../services/shared.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-tablefilter',
  templateUrl: './tablefilter.component.html',
  styleUrls: ['./tablefilter.component.css'],
  standalone: true,
  imports: [
    MatTableModule,
    TablefilterComponent,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
  ],
})
export class TablefilterComponent {

  constructor(private sharedService: SharedService) {}
  machinetypes: machinetype[] = [

    { value: '2', viewValue: '2D' },
    { value: '3', viewValue: '3D' },
  ];
  selected: any;


  selectMachine(machineValue: any) {
    const selectedOption = this.machinetypes.find(
      (option) => option.viewValue === machineValue
    );


    this.sharedService.sendParameter(selectedOption?.value);
  }
}

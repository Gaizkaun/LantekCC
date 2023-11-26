
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TablaComponent } from './tabla/tabla.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TablefilterComponent } from './tablefilter/tablefilter.component';
import { SharedService } from './services/shared.service';
import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [
    AppComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule ,
    TablaComponent,
    HttpClientModule,
    BrowserAnimationsModule,
    TablefilterComponent,
    HeaderComponent
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

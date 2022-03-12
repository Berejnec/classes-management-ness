import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SplitButtonModule} from "primeng/splitbutton";
import {ButtonModule} from "primeng/button";
import { ClassTableComponent } from './class-table/class-table.component';
import {TableModule} from 'primeng/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import { OccupancyComponent } from './occupancy/occupancy.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AppComponent,
    ClassTableComponent,
    OccupancyComponent
  ],
  imports: [
    BrowserModule,
    SplitButtonModule,
    ButtonModule,
    TableModule,
    NoopAnimationsModule,
    MatTableModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

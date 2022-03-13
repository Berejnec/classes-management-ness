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
import { MatDialogModule } from '@angular/material/dialog';
import { SearchComponent } from './search/search.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ClassTableComponent,
    OccupancyComponent,
    SearchComponent,
    SearchfilterPipe,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    SplitButtonModule,
    ButtonModule,
    TableModule,
    NoopAnimationsModule,
    MatTableModule,
    MatProgressBarModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

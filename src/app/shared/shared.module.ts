import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './components/table/table.component';

@NgModule({
  exports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TableComponent]
})
export class SharedModule { }
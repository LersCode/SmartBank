import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

const modules = [
  MatButtonModule,
  MatIconModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
];

@NgModule({
  exports: modules,
})
export class MaterialModule {}

import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const modules = [MatButtonModule, MatIconModule];

@NgModule({
  exports: modules,
})
export class MaterialModule {}

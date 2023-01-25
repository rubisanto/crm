import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';



@NgModule({
  // liste tous les composants attachés au module
  declarations: [
    TableLightComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableLightComponent
  ]
})
export class SharedModule { }

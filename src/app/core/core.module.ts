import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';



@NgModule({
  declarations: [],
  // utiliser pour les composants
  imports: [
    CommonModule
  ],
  exports: [
    UiModule,
  ]
})
export class CoreModule { }

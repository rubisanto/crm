import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';
import { TotalPipe } from './pipes/total.pipe';
import { TvaPipe} from './pipes/tva.pipe';
import { StateDirective } from './directives/state.directive';



@NgModule({
  // liste tous les composants attachés au module
  declarations: [
    TableLightComponent,
    BtnComponent,
    TotalPipe,
    TvaPipe,
    StateDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TableLightComponent,
    BtnComponent,
    TotalPipe,
    TvaPipe,
    StateDirective
  ]
})
export class SharedModule { }

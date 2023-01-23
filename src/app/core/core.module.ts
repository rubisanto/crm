import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent
  ],
  // utiliser pour les composants
  imports: [
    CommonModule
  ],
  exports: [
    UiModule,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    IconsModule
  ]
})
export class CoreModule { }

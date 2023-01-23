import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDeleteComponent } from './components/icon-delete/icon-delete.component';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    IconDeleteComponent,
    IconNavComponent,
    IconEditComponent,
    IconCloseComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    IconDeleteComponent,
    IconNavComponent,
    IconEditComponent,
    IconCloseComponent,
  ],
})
export class IconsModule {}

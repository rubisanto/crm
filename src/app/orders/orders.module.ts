import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { OrdersRoutingModule } from './orders-routing.module';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { TemplatesModule } from '../templates/templates.module';
import { SharedModule } from '../shared/shared.module';
import { FormOrderComponent } from './components/form-order/form-order.component';
import { IconEditComponent } from '../icons/components/icon-edit/icon-edit.component';
import { IconsModule } from '../icons/icons.module';


@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageEditOrderComponent,
    PageAddOrderComponent,
    FormOrderComponent,


  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    TemplatesModule,
    SharedModule,
    ReactiveFormsModule,
    IconsModule

  ]
})
export class OrdersModule { }

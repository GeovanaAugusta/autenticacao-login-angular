import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  // Lazy-load - removo do app.module e chamo aqui, duplicação é proibidido
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,

  ]
})
export class AdminModule { }

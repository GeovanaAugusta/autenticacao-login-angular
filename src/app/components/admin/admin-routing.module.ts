import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

// O path é '' porque na rota pai já atribui admin(auth-routing)
const routes: Routes = [
  {  path: '', component: HomeComponent },
  // Qualquer outra rota que eu coloque da /admin, a validação ainda sim retorna para / caso não autenticado
  {  path: 'dashboard', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

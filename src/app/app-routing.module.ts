import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // définir les routes ici
  // { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  // { path: 'sign-in', component: PageSignInComponent },
  // possibilité de faire comme ca
  // { path: 'sign-up', component: PageSignUpComponent },
  // {path: 'reset-password', component: PageResetPasswordComponent},
  // {path: 'forgot-password', component: PageResetPasswordComponent}

  // mise en place du lazy loading
  {path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule),


},
// pour le module orders
{path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
},
// pour le module clients
{path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)},
// pour le module page-not-found
{path: '**', loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {preloadingStrategy: PreloadAllModules}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

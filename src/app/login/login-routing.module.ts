import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageForgotPasswordComponent } from './pages/page-forgot-password/page-forgot-password.component';
import { PageResetPasswordComponent } from './pages/page-reset-password/page-reset-password.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';

const routes: Routes = [
  // définir les routes ici
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: PageSignInComponent },
  { path: 'sign-up', component: PageSignUpComponent },
  {path: 'reset-password', component: PageResetPasswordComponent},
  {path: 'forgot-password', component: PageForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

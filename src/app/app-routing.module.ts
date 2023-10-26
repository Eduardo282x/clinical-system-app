import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/authentication/login/login.component';
import { RegistroComponent } from './modules/authentication/registro/registro.component';
import { HomeComponent } from './modules/home/components/home.component';
import { RecuperarComponent } from './modules/authentication/recuperar/recuperar.component';
import { HelpUserComponent } from './modules/help-user/components/help-user.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'home', component: HomeComponent},
  {path: 'recuperar', component: RecuperarComponent},
  {path: 'ayuda', component: HelpUserComponent},  
  {path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

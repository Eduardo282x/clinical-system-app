import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/authentication/login/login.component';
import { RegistroComponent } from './modules/authentication/registro/registro.component';
import { HomeComponent } from './modules/home/components/home.component';
import { RecuperarComponent } from './modules/authentication/recuperar/recuperar.component';
import { HelpUserComponent } from './modules/help-user/components/help-user.component';
import { EmployeesComponent } from './modules/employees/components/employees.component';
import { ExamsComponent } from './modules/exams/components/exams.component';
import { BannerComponent } from './modules/shared/banner/banner.component';
import { EmployeComponent } from './modules/employees/employe/employe.component';
import { AsistentComponent } from './modules/employees/asistent/asistent.component';
import { SeeAsistentComponent } from './modules/employees/seeAsistent/seeAsistent.component';
import { RegisterEmployeComponent } from './modules/employees/register-employe/register-employe.component';
import { ShowEmployesComponent } from './modules/employees/showEmployes/showEmployes.component';
import { FacturesComponent } from './modules/factures/factures/factures.component';
import { ClientsComponent } from './modules/factures/clients/clients.component';
import { AnulationComponent } from './modules/factures/anulation/anulation.component';
import { FactureComponent } from './modules/factures/facture/facture.component';
import { PruebasComponent } from './modules/factures/pruebas/pruebas.component';
import { BudgetComponent } from './modules/factures/budget/budget.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'recuperar', component: RecuperarComponent},
  {path: 'help', component: HelpUserComponent},  

  {
    path: 'home', 
    component: BannerComponent,
    children: [
      {path: '', component: HomeComponent},
      {
        path: 'employes', 
        component: EmployeesComponent,
        children: [
          {
            path: 'employe', 
            component: EmployeComponent,
          },
          {
            path: 'asistent', 
            component: AsistentComponent,
          },
          {
            path: 'seeAsistent', 
            component: SeeAsistentComponent,
          },
          {
            path: 'register', 
            component: RegisterEmployeComponent,
          },
          {
            path: 'show', 
            component: ShowEmployesComponent,
          }
        ]
      },  
      {
        path: 'factures', 
        component: EmployeesComponent,
        children: [
          {
            path: 'facture', 
            component: FactureComponent,
          },
          {
            path: 'anulation', 
            component: AnulationComponent,
          },
          {
            path: 'choose-facture', 
            component: FacturesComponent,
          },
          {
            path: 'budget', 
            component: BudgetComponent,
          },
          {
            path: 'clients', 
            component: ClientsComponent,
          },
          {
            path: 'pruebas', 
            component: PruebasComponent,
          }
        ]
      },  
      {path: 'examenes', component: ExamsComponent},  
    ]
  },
  
  

  
  {path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

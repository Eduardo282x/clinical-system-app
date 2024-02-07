import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { RegistroComponent } from './modules/authentication/registro/registro.component';
import { SharedModule } from './modules/shared/shared.module';
import { FooterComponent } from './modules/shared/footer/footer.component';
import { RecuperarComponent } from './modules/authentication/recuperar/recuperar.component';
import { HomeComponent } from './modules/home/components/home.component';
import { ResultsComponent } from './modules/results/results.component';
import { HelpUserComponent } from './modules/help-user/components/help-user.component';
import { EmployeesComponent } from './modules/employees/components/employees.component';
import { ExamsComponent } from './modules/exams/components/exams.component';
import { BannerComponent } from './modules/shared/banner/banner.component';
import { RegisterEmployeComponent } from './modules/employees/register-employe/register-employe.component';
import { ShowEmployesComponent } from './modules/employees/showEmployes/showEmployes.component';
import { FormRegisterComponent } from './modules/shared/formRegister/formRegister.component';
import { BaseFacturesComponent } from './modules/factures/baseFactures/baseFactures.component';
import { ConsultLoginComponent } from './modules/authentication/consult-login/consult-login.component';
import { FacturesComponent } from './modules/factures/factures/factures.component';
import { ClientsComponent } from './modules/factures/clients/clients.component';
import { AnulationComponent } from './modules/factures/anulation/anulation.component';
import { FactureComponent } from './modules/factures/facture/facture.component';
import { PruebasComponent } from './modules/factures/pruebas/pruebas.component';
import { BudgetComponent } from './modules/factures/budget/budget.component';
import { ConfigurationComponent } from './modules/factures/Configuration/Configuration.component';
import { RegisterClientsComponent } from './modules/factures/register-clients/register-clients.component';
import { ChooseFactureComponent } from './modules/factures/choose-facture/choose-facture.component';
import { OrdersComponent } from './modules/exams/orders/orders.component';
import { ConfigOrdersComponent } from './modules/exams/config-orders/config-orders.component';
import { StepperOrdersComponent } from './modules/exams/stepper-orders/stepper-orders.component';
import { GetOrderDinamicComponent } from './modules/shared/get-order-dinamic/get-order-dinamic.component';
import { ViewOrdersComponent } from './modules/view-orders/view-orders.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    ExamsComponent,
    EmployeesComponent,
    FooterComponent,
    RecuperarComponent,
    ResultsComponent,
    HelpUserComponent,
    BannerComponent,
    RegisterEmployeComponent,
    ShowEmployesComponent,
    FormRegisterComponent,
    BaseFacturesComponent,
    FacturesComponent,
    ClientsComponent,
    AnulationComponent,
    FactureComponent,
    PruebasComponent,
    BudgetComponent,
    ConfigurationComponent,
    RegisterClientsComponent,
    ChooseFactureComponent,
    ConsultLoginComponent,
    OrdersComponent,
    ConfigOrdersComponent,
    StepperOrdersComponent,
    GetOrderDinamicComponent,
    ViewOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

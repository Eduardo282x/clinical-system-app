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
    FormRegisterComponent
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

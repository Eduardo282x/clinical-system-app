import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpUserComponent } from './components/help-user.component';

const routes: Routes = [
  { path: 'ayuda', component: HelpUserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpUserRoutingModule { }

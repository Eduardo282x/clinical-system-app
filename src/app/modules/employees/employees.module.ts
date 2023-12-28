import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EmployeesRoutingModule } from './employees-routing.module';

@NgModule({
    declarations: [
        
    ],
    imports: [
        CommonModule,
        EmployeesRoutingModule,
        SharedModule,
    ]
})
export class EmployeesModule { }

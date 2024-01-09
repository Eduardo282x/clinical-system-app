import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { MatStepperModule } from '@angular/material/stepper';
import { CardComponent } from '../home/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import { MenuSharedComponent } from './menuShared/menuShared.component';
import { AsistentComponent } from '../employees/asistent/asistent.component';
import { SeeAsistentComponent } from '../employees/seeAsistent/seeAsistent.component';
import { EmployeComponent } from '../employees/employe/employe.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    SnackBarComponent,
    CardComponent,
    MenuSharedComponent,
    AsistentComponent,
    SeeAsistentComponent,
    EmployeComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatStepperModule,
    HttpClientModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatExpansionModule,
    MatListModule,
    MatDividerModule,
  ],
  exports: [
    CardComponent,
    MenuSharedComponent,
    AsistentComponent,
    SeeAsistentComponent,
    EmployeComponent,
    
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatStepperModule,
    HttpClientModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatExpansionModule,
    MatListModule,
    MatDividerModule,
  ],
})
export class SharedModule { }

import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { ConfirmEmailComponent } from './pages/confirm-email/confirm-email.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ConfirmEmailComponent,
    AuthComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    SharedModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
    RadioButtonModule,
    CalendarModule,
    DialogModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [
    
  ],
  exports: [
    
  ]
  ,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class AuthModule { }

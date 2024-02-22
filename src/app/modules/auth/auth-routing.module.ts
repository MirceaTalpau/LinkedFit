import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ConfirmEmailComponent } from './pages/confirm-email/confirm-email.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { PageNotFoundComponent } from 'src/app/_shared/components/page-not-found/page-not-found.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';

// Import your components or modules here

const routes: Routes = [
    {path:'',component: AuthComponent,
    children:
    [
        {path:"",redirectTo:"login",pathMatch:"full"},
        {path:"login",component:LoginComponent},
        {path:"register",component:RegisterComponent},
        {path:"confirm/email/:email/:token",component: ConfirmEmailComponent},
        {path:"forgot-password",component:ForgotPasswordComponent},
        {path:"confirm/password/:token",component:ChangePasswordComponent},
        {path:"**", pathMatch:"full",component:PageNotFoundComponent}
    ]
    }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

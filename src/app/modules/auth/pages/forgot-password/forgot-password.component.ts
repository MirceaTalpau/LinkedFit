import { AuthService } from 'src/app/_core/api/auth.service';
import { Component } from '@angular/core';
import { FormControl, UntypedFormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  
  found: boolean = true;
  sent: boolean = false;
  errorMessage : string = "";

  resetInfo = this.fb.group({
    email: [''],
  })

  constructor(private authService:AuthService,private router:Router,private fb:UntypedFormBuilder) { }

  onSubmit(){
    this.authService.forgotPassword(this.resetInfo.get("email")?.value).subscribe({
      next: (res) => {
        console.log(res);
        this.sent = true;
      },
      error: (error) => {
        console.log(error);
        if(error.error =="Email is not verified!"){
          this.found = false;
          this.errorMessage = "We did not found an email or email is not verified!";
        }
        else{
          this.found = false;
          this.errorMessage = "We did not found an email!";
        }
        
      }
    });
  }
  back(){
    this.router.navigate(['/auth/login']);
  }
}

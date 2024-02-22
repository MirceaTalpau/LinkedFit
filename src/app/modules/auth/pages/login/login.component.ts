import { first } from 'rxjs';
import { AuthService } from './../../../../_core/api/auth.service';
import { Component, OnInit, Injectable, NgZone, AfterViewChecked } from '@angular/core';
import { FormControl, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { LoginInfo } from 'src/app/_core/models/auth/LoginInfo';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

    ngOnInit() {
      
  };

  onSignIn(): void {
    
  }
  logError: boolean = false;
  emailError: boolean = false;
  modalVisible: boolean = false;
  user: any;
  loggedIn: any;
  loginInfo = this.fb.group({
    email: new FormControl([''],[Validators.required,Validators.email]),
    password: new FormControl([''],[Validators.required,Validators.minLength(6)])
  })

  register(){
    this.router.navigate(['/auth/register']);
  }
  constructor(private fb: UntypedFormBuilder,private auth:AuthService,private router:Router){}
  resendEmail(){
    this.auth.resendEmailConfirmation(this.loginInfo.get('email')?.value).subscribe({
      next: (res) =>{
        console.log(res)
        this.modalVisible = false;
        this.emailError = false;
      },
      error: (error) => {
        console.log(error.error)
      }
    })
  }

  cancel(){
    this.modalVisible = false;
    this.emailError = false;
  }

  onSubmit(){
    if(this.loginInfo.valid){
    const login={
      email: this.loginInfo.get('email')?.value || "",
      password: this.loginInfo.get('password')?.value || ""
    }
      this.auth.login(login).subscribe({
        next: (res) =>{
          console.log(res.token)
          console.log("ceva")
        },
        error: (error) => {
          console.log(error.error)
          if(error.error === "Email is not verified!"){
            this.emailError = true;
          }
          else{
            this.logError = true;
          }
        }
    })
    }
  }
  }


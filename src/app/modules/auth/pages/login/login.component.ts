import { AuthService } from './../../../../_core/api/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(private fb: FormBuilder,private auth:AuthService,private router:Router){}

  ngOnInit(): void {
    this.loginInfo = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  loginInfo!: FormGroup;
  logError: boolean = false;
  emailError: boolean = false;
  modalVisible: boolean = false;
  user: any;
  loggedIn: any;


  register(){
    this.router.navigate(['/auth/register']);
  }

  getEmail(){
    return this.loginInfo.get('email')?.value;
  }

  getPassword(){
    return this.loginInfo.get('password')?.value;
  }


  resendEmail(){
    this.auth.resendEmailConfirmation(this.getEmail()).subscribe({
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
      email: this.getEmail() || "",
      password: this.getPassword() || ""
    }
      this.auth.login(login).subscribe({
        next: (res) =>{
          console.log(res.token)
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


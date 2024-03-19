import { AuthService } from './../../../../_core/api/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(private fb: FormBuilder,private auth:AuthService,private router:Router){}

    ngOnInit() {
      this.loginInfo = this.fb.group({
        email: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur' }],
        password: ['', { validators: [Validators.required], updateOn: 'blur' }]
      })
    };

  onSignIn(): void {
    
  }


  validationErrorMessages = {
    email: [
      { type: 'required', message: 'Email is required!' },
      { type: 'email', message: 'Please enter a valid email address!' }
    ],
    password: [
      { type: 'required', message: 'Password is required!' }
    ]
  };
  logError: boolean = false;
  emailError: boolean = false;
  modalVisible: boolean = false;
  user: any;
  loggedIn: any;
  loginInfo!: FormGroup; 

  register(){
    this.router.navigate(['/auth/register']);
  }

  get email(){
    return this.loginInfo.get('email');
  }

  get password(){
    return this.loginInfo.get('password');
  }

  resendEmail(){
    this.auth.resendEmailConfirmation(this.email?.value).subscribe({
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
      email: this.email?.value || "",
      password: this.password?.value || ""
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


import { ResetPassword } from './../../../../_core/models/auth/ResetPassword';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_core/api/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements  OnInit {

  constructor(private authService:AuthService,private fb:UntypedFormBuilder,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const token = this.route.snapshot.paramMap.get('token');
    this.authService.verifyResetPasswordToken(token!).subscribe(
      {
        next: (res) => {
          this.validToken = true;
          console.log(this.validToken);
        },
        error: (error) => {
          this.validToken = false;
          console.log(error.error);
        }
      }
    )
  }

  errorMessages = {
    newPassword: [
      { type: 'required', message: 'Password is required!' },
      { type: 'minlength', message: 'Password must be at least 6 characters long!' }
    ],
    confirmPassword: [
      { type: 'required', message: 'Password is required!' },
      { type: 'minlength', message: 'Password must be at least 6 characters long!' }
    ],
    passwordNotMatch: [
      { type: 'passwordNotMatch', message: 'Password does not match!' }
    ]
  }

  validToken : boolean = false;
  changed : boolean = false;
  newPassword?: ResetPassword ;

  changePassword = this.fb.group({
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    confirmPassword: new FormControl('',[Validators.required,Validators.minLength(6)]),
  },
  {
    validators: this.password
  }
 )

  passwordMatch(): boolean{
    return this.changePassword.hasError('passwordNotMatch');
  }

  getNewPassword(): ResetPassword | null{
    if(this.changePassword.get("password")?.value != this.changePassword.get("confirmPassword")?.value){
      return null;
    }
    this.newPassword = {
      password: this.changePassword.get("password")?.value,
      confirmPassword: this.changePassword.get("confirmPassword")?.value
    }
    return this.newPassword;
  }

    password(formGroup: FormGroup) {
      const password = formGroup.get('password')?.value;
      const confirmPassword  = formGroup.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { passwordNotMatch: true };
    }

   onSubmit(){

    if(this.changePassword.valid){
      this.authService.resetPassword(this.route.snapshot.paramMap.get('token')!,this.getNewPassword()!).subscribe(
        {
          next: (res) => {
            this.changed = true;
          },
          error: (error) => {
            console.log(error);
          }
        }
      )
    }
   }
   ///ADAUGA MODAL PENTRU CONFIRMARE SI MODIFICA PROCEDURA SA INTRODUCA NULL IN PASSWORDRESET TOKEN SI MODIFICA FORM CONTROLL SI VEZI CA INTRA DOAR O VALOARE IN CONTROLLER
 back(){
    this.router.navigate(['/auth/login']);
 }
}

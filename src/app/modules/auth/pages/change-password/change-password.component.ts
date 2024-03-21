import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormBuilder, ValidatorFn, Validators } from '@angular/forms';
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
    this.newPasswordForm = this.fb.group({
      password: ['', {validators: [Validators.required,Validators.minLength(6)], updateOn: 'blur'}],
      confirmPassword: ['', {validators: [Validators.required,Validators.minLength(6)], updateOn: 'blur'}]
    },
    {validators: this.validatePassword()});
  }

  errorMessages = {
    newPassword: [
      { type: 'required', message: 'Password is required!' },
      { type: 'minlength', message: 'Password must be at least 6 characters long!' }
    ],
    confirmPassword: [
      { type: 'required', message: 'Password is required!' },
      { type: 'minlength', message: 'Password must be at least 6 characters long!' },
      { type: 'passwordMismatch', message: 'Password does not match!' }
    ]
  }

  validToken : boolean = false;
  changed : boolean = false;
  newPasswordForm !: FormGroup;

  get password() { return this.newPasswordForm.get('password'); }
  get confirmPassword() { return this.newPasswordForm.get('confirmPassword'); }

  validatePassword() :ValidatorFn{
    return (formGroup) => {
      const password = this.password?.value;
      const confirmPassword = this.confirmPassword?.value;
      if(password !== confirmPassword){
        confirmPassword?.setErrors({passwordMismatch: true});
        return {passwordMismatch: true};
      }
      return null;
    }
  }

   onSubmit(){

    if(this.newPasswordForm.valid){
      this.authService.resetPassword(this.route.snapshot.paramMap.get('token')!,this.password?.value).subscribe(
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

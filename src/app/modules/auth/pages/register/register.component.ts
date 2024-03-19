import { first } from 'rxjs';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_core/api/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private fb: FormBuilder, private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group(
    {
      firstName: ['',{validators:[Validators.required,Validators.minLength(3)] , updateOn: 'blur'}],
      lastName: ['',{validators:[Validators.required,Validators.minLength(3)] , updateOn: 'blur'}],
      email: ['',{validators:[Validators.required,Validators.email], updateOn: 'blur'}],
      password: ['',{validators:[Validators.required,Validators.minLength(6)] , updateOn: 'blur'}],
      confirmPassword: ['', {validators:[Validators.required,Validators.minLength(6)] , updateOn: 'blur'}],
      birthday: ['',{validators:[Validators.required] , updateOn: 'blur'}],
      gender: ['',{validators:[Validators.required] , updateOn: 'blur'}]
    },
    {
      validators: [this.validAge(), this.validatePassword()],
      updateOn: 'submit'
    }
    )

  }
  registerForm !: FormGroup;
  date:any;
  modalVisible :boolean = false;
  error: boolean = false;

  get firstName() {
     return this.registerForm.get('firstName'); 
  }
  get lastName() {
    return this.registerForm.get('lastName'); 
  }
  get email() {
    return this.registerForm.get('email'); 
  }
  get password() {
    return this.registerForm.get('password'); 
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword'); 
  }
  get birthday() {
    return this.registerForm.get('birthday'); 
  }


  errorMessages = {
    firstName: [
      { type: 'required', message: 'First name is required!' },
      { type: 'minlength', message: 'First name must be at least 3 characters long!' },
    ],
    lastName: [
      { type: 'required', message: 'Last name is required!' },
      { type: 'minlength', message: 'Last name must be at least 3 characters long!' },
    ],
    email: [
      { type: 'required', message: 'Email is required!' },
      { type: 'email', message: 'This email is not valid!'},
      { type: 'minlength', message: 'This email is not valid!' }
    ],
    password: [
      { type: 'required', message: 'Password is required!' },
      { type: 'minlength', message: 'Password must be at least 6 characters long!' }
    ],
    confirmPassword: [
      { type: 'required', message: 'Confirm password is required!' },
      { type: 'minlength', message: 'Password must be at least 6 characters long!' },
      { type: 'passwordMismatch', message: 'Passwords do not match!' }
    ],
    birthday:[
      { type: 'required', message: 'Birthday is required!' },
      { type: 'validAge', message: 'You must be at least 18 years old!'}
    ]
  }

  getCurrentDate()
  {
    this.date = new Date();
    return this.date;
  }

  validAge() :ValidatorFn{
    return (formGroup) => {
      const birthday = formGroup.get('birthday')?.value;
      const date = new Date(birthday);
      const today = new Date();
      const age = today.getFullYear() - date.getFullYear();
      if(age < 18){
        formGroup.get('birthday')?.setErrors({validAge: true});
        return {validAge: true};
      }
      return null;
    }
  }

  validatePassword() :ValidatorFn{
    return (formGroup) => {
      const password = formGroup.get('password')?.value;
      const confirmPassword = formGroup.get('confirmPassword')?.value;
      if(password !== confirmPassword){
        formGroup.get('confirmPassword')?.setErrors({passwordMismatch: true});
        return {passwordMismatch: true};
      }
      return null;
    }
  }

  showDialog(){
    this.modalVisible = true;
  }

  redirect(){
    this.router.navigate(['/auth/login']);
  }
  onSubmit() {
    this.auth.register(this.registerForm.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.showDialog();
        },
        error: (err) => {
          console.log(err);
          this.error = true;
        }
      })
    }
}

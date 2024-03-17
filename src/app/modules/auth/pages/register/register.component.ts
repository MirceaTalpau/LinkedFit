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
      firstName: ['',{validators:[Validators.required,Validators.minLength(3)],updateOn: 'blur'}],
      lastName: new FormControl('',[Validators.required,Validators.minLength(3)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      birthday: new FormControl('',[Validators.required]),
      gender: ['']
    },
    {
      validators: this.validAge()
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
  get birthday() {
    return this.registerForm.get('birthday'); 
  }


  errorMessages = {
    firstName: [
      { type: 'required', message: 'First name is required!' },
      { type: 'minlength', message: 'First name must be at least 3 characters long!' }
    ],
    lastName: [
      { type: 'required', message: 'Last name is required!' },
      { type: 'minlength', message: 'Last name must be at least 3 characters long!' }
    ],
    email: [
      { type: 'required', message: 'Email is required!' },
      { type: 'minlength', message: 'This email is not valid!' }
    ],
    password: [
      { type: 'required', message: 'Password is required!' },
      { type: 'minlength', message: 'Password must be at least 6 characters long!' }
    ],
    birthday:[
      { type: 'required', message: 'Birthday is required!' },
      { type: 'validAge', message: 'You must be at least 18 years old!'}
    ]
  }

  validAge():ValidatorFn{
    return (formGroup) => {
      const birthday = formGroup.get('birthday')?.value;
      const date = new Date(birthday);
      const today = new Date();
      const age = today.getFullYear() - date.getFullYear();
      if(age < 18){
        return {validAge: true};
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

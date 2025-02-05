import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  imports: [ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
registerForm: FormGroup;


passwordMatch():ValidatorFn{
  return (control:AbstractControl):ValidationErrors|null=>{
  if(!control.parent) return null;
  const password = control.parent.get('userPassword')?.value;
  const confirmPassword = control.value;
  return password&&confirmPassword && confirmPassword === password
  ?null:{passwordMismatch:true}
  }

}
  constructor() {
    this.registerForm = new FormGroup({
     userName: new FormControl('',[ Validators.required,Validators.minLength(3),Validators.pattern('^[^\\s]+$')]),
     userEmail: new FormControl('',[ Validators.required,Validators.email]),
     userPassword: new FormControl('',[ Validators.required,Validators.minLength(8),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$')]),
     confirmPassword: new FormControl('',[ Validators.required, this.passwordMatch()]),
     

    })
   }
   get formControls(){
     return this.registerForm.controls;
   }
   handleSumbitForm(){
if(this.registerForm.invalid){
  this.registerForm.markAllAsTouched();
  return;
}

   }

}

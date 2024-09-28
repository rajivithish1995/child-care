import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  loginForm!: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnnit() {
   
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password:['',Validators.required]
     
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.formSubmitted = true;
    if(this.loginForm.invalid) {
      return 
    } else {
     console.log(this.loginForm)
    }
  }

}

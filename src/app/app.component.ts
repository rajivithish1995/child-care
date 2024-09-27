import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  myForm!: FormGroup;
  title = "project"
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnnit() {
   
  }

  createForm(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['',[Validators.required, Validators.minLength(10)]],
    });
  }

  get f() {
    return this.myForm.controls;
  }

  onSubmit() {
    debugger;
    console.log(this.myForm);
  }

}

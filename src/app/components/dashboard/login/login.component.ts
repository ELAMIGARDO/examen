import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
  ], 
  templateUrl: './login.component.html',
  
})
export class LoginComponent {
  form:FormGroup;
  
  constructor(private formBuilder:FormBuilder){
    this.form=this.formBuilder.group({
      email:['',Validators.required],
      password: ['',Validators.required]
    })
  }

  login(){
    console.log(this.form.value);
    console.log(this.form.status);
    console.log(this.form.controls['email'].value);
    console.log(this.form.controls['password'].value);
    console.log(this.form.controls['email'].errors);
    console.log(this.form.controls['password'].errors);    
    console.log(this.form)
  }

}

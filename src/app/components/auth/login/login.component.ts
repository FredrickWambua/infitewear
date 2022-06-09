import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup

  constructor(private formBuilder: FormBuilder) { }

  get(){
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:  ['',[Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@['a-z']+\\.[a-z]{2,4}$")]],
      password:  ['',[Validators.required, Validators.maxLength(10),]]
    })
  }

  onLogin(){
    return this.loginForm.value
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  errorMessage!: string;

  constructor(private formBuilder: FormBuilder,
    public authService:AuthService,
    public router:Router,
    ) { }

  get(){
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:  ['',[Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@['a-z']+\\.[a-z]{2,4}$")]],
      password:  ['',[Validators.required, Validators.minLength(8),]]
    })
  }

  onLogin(){
    this.authService.loginUser(this.loginForm.value);
  
  }
  

}

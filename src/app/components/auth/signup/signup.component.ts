import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup
  errorMessage!: string;
  constructor(public formBuilder: FormBuilder,
    public authService:AuthService,
    public router:Router,
    ) { }

  get(){
    return this.signUpForm.controls;
  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      firstname: ['',[Validators.required, Validators.minLength(3)]],
      lastname:  ['',[Validators.required, Validators.minLength(3)]],
      email:  ['',[Validators.required, Validators.email, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      password:  ['',[Validators.required, Validators.minLength(8),]]
    })
  }

  onSubmit(){        
    this.authService.registerUser(this.signUpForm.value).subscribe((data)=>{
      this.router.navigate(['/login'])
    })
    
      
  }

}

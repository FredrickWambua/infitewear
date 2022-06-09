import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup

  constructor(private formBuilder: FormBuilder) { }

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
    return this.signUpForm.value
  }

}

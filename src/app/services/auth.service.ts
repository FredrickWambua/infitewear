import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
   AUTH_API: string = 'http://localhost:8080/api/users';
   httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  
  constructor(private http:HttpClient, private router:Router ) { }

  registerUser(user:User): Observable<any>{
    let API_URL = `${this.AUTH_API}/add`;
    return this.http.post(API_URL, user)
    .pipe(catchError(this.handleError));

  }

  loginUser(user:User): Observable<any>{
    let API_URL = `${this.AUTH_API}/login`;
    return this.http.post(API_URL, user)
    .pipe(catchError(this.handleError));
  }

  logoutUser(user:User){
    localStorage.clear()
  }

  handleError(error:HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    } else {
      errorMessage = `Error Code: ${error.status} Message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(()=>{
      errorMessage
    })
    
  }
}

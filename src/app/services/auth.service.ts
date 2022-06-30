import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { catchError, Observable, throwError, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
   AUTH_API: string = 'http://127.0.0.1:5500/api/users';
   httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
   currentUser = {};

  
  constructor(private http:HttpClient, private router:Router ) { }

  registerUser(user:User): Observable<any>{
    let API_URL = `${this.AUTH_API}/register`;
    return this.http.post(API_URL, user)
    .pipe(catchError(this.handleError));

  }

  loginUser(user:User){
    return this.http.post(`${this.AUTH_API}/login`, user)
    .subscribe((res:any)=>{

      if(res.token){
        localStorage.setItem('access_token', res.token);
        console.log(res);
        this.getUser(res.email).subscribe((data)=>{
          this.currentUser = data;
        })
        this.router.navigate(['/products'])
        
      }
      if(!res.token){
        console.log('invalid login credentials');
                
        this.router.navigate(['/login'])
      }
  
    })
  }

  getToken(){
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !==null ? true : false
  }

  logoutUser(){
    localStorage.clear()
  }

  getUser(id:any):Observable<any>{
    let API_URL = `${this.AUTH_API}/${id}`;
    return this.http.get(API_URL, {headers:this.httpHeaders}).pipe(
      map((data)=>{
        return data || {}
      }),
      catchError(this.handleError)
    )
  }

  handleError(error:HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = `Error: ${error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status} Message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(()=>{
      errorMessage
    })
    
  }
}

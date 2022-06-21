import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const AUTH_API = 'http://localhost:8080/api/user/'
const httpOptions = {
  headers: new HttpHeaders({'Contenty-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}

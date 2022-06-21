import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError, catchError, map, tap } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private httpClient: HttpClient) { }

  // products: {name: string, image:string, description:string, category:string, price:number}[]=[]
  public search = new BehaviorSubject<string>('')
  PROD_API: string = 'http://127.0.0.1:5500/api/products';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  addProduct(data:any): Observable<any>{
    let API_URL = `${this.PROD_API}/add`
    return this.httpClient
    .post(API_URL, data, {headers:this.httpHeaders})
    .pipe(catchError(this.handleError));
    
  }

  getProducts():Observable<any>{
    let API_URL = `${this.PROD_API}`;
    return this.httpClient
    .get(API_URL)
    .pipe(catchError(this.handleError));
  }

  getProduct(id:any): Observable<any>{
    let API_URL = `${this.PROD_API}/${id}`;
    return this.httpClient.get(API_URL, {headers:this.httpHeaders})
    .pipe(
      map((res:any)=>{
        return res || {}
      }),
      catchError(this.handleError)
    );
    // return this.products[i]
  }
  updateProduct(id:any, data:any):Observable<any>{
    let API_URL = `${this.PROD_API}/edit`;
    return this.httpClient.put(API_URL, data, {headers:this.httpHeaders})
    .pipe(catchError(this.handleError));
  }

  deleteProduct(id:any){
    let API_URL = `${this.PROD_API}/${id}`;
    return this.httpClient.delete(API_URL, {headers:this.httpHeaders})
    .pipe(catchError(this.handleError));
  };

  deleteAllProducts(){
    let API_URL = `${this.PROD_API}`;
    return this.httpClient.delete(API_URL)
    .pipe(catchError(this.handleError));
  };

// error handler function
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

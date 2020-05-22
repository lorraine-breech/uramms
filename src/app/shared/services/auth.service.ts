import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { tap, delay, catchError, map } from 'rxjs/operators';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserWToken } from '../models/user-with-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private loginUrl = 'api/user/login';

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  logIn(username: string, password: string): Observable<UserWToken> {
    console.log("Entered Login Service.");
    const url = this.loginUrl;

    let body = {
        username: username,
        password: password
    }

    return this.httpClient.post(url, body).pipe(
        tap(data => {
            if (data) {
              console.log(JSON.stringify(data));
            }
        }),
        catchError(this.handleError<any>(`logIn username=${username}`))
    );  
  }

  logOut() {
    localStorage.removeItem('jwtoken');
    this.router.navigate(['/login']);
  }

  public isLoggedIn(): boolean {
    let authToken = localStorage.getItem('jwtoken');
    return (authToken !== null) ? true : false;
  }

  //below is unmodified copied code
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
    };
  }
  
  /*
  API_URL: string = 'http://localhost:4000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(
    private httpClient: HttpClient,
    public router: Router
  ){}

  
  register(user: User): Observable<any> {

    return this.httpClient.post(`${this.API_URL}/users/register`, user).pipe(
        catchError(this.handleError)
    )
  }
  

  login(user: User) {
    return this.httpClient.post<any>(`${this.API_URL}/users/login`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token)
        this.getUserProfile(res._id).subscribe((res) => {
          this.currentUser = res;
          this.router.navigate(['users/profile/' + res.msg._id]);  //change this
        })
      })
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  logout() {
    if (localStorage.removeItem('access_token') == null) {
      this.router.navigate(['login']);
    }
  }

  getUserProfile(id): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/users/profile/${id}`, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }*/
  


  
}

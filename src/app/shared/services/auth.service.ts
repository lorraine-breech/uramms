import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { tap, delay, catchError, map } from 'rxjs/operators';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserWToken } from '../models/user-with-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private loginUrl = 'api/users/login';

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
}

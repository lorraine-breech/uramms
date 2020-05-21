import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { tap, catchError } from 'rxjs/operators';
import { UserWToken } from '../models/user-with-token';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl ='api/user';
  private usersUrl ='api/users';
  private loginUrl = 'api/user/login';
  private currentUser: User;
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
              let userWT = new UserWToken(data);
              console.log("UserWT: " + JSON.stringify(userWT));
              console.log("Token: " + userWT.token);
              this.currentUser = new User(userWT.getUser());
              console.log("Current User: " + JSON.stringify(this.currentUser));
              //localStorage.setItem('currentUser', JSON.stringify(data));
            }
        }),
        catchError(this.handleError<any>(`logIn username=${username}`))
    );  
  }

  


  //below is unmodified code
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
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


  /**
   * Lets the user log in (if user enters valid username and password) and be able to navigate to the correct pages
   * @param username username input of the user logging in
   * @param password password input of the user logging in
   */

  /*
  logIn(username: string, password: string): Observable<User> {

    const url = this.loginUrl;

    let body = {
        user_username: username,
        user_password: password
    }

    
    return this.httpClient.post(url, body, {observe: 'response'}).pipe(
      
        tap(user => {
            if (user) {
              let token = 
                this.currentUser = new User(resp.body.doc);
                localStorage.setItem('currentUser', JSON.stringify(doc));
            }
          return doc; //should return the whole response object
        }),
        catchError(this.handleError<any>(`logIn user_name=${username}`))
        
      );
  }
  */
}

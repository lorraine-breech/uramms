import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { tap, catchError } from 'rxjs/operators';
import { UserWToken } from '../models/user-with-token';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl ='api/user';
  private usersUrl ='api/users';
  private currentUser: User;
  private jwtoken: String;
  private currentStudentUser: Student;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  setCurrentStudentUser(student: Student){
    this.currentStudentUser = student;
  }

  getCurrentStudentUser(): Student{
    return this.currentStudentUser;
  }

  setCurrentUser(user: User){
    this.currentUser = new User(user);
  }

  getCurrentUser(): User{
    return this.currentUser;
  }

  setJWToken(token: String){
    localStorage.removeItem('jwtoken');

    this.jwtoken = new String(token);
    localStorage.setItem('jwtoken', JSON.stringify(this.jwtoken));
  }

  getJWToken(): String{
    return this.jwtoken;
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

}
import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsUrl = 'api/students'

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }


  getStudent(student_id): Observable<Student> {
    const url = `${this.studentsUrl}/${student_id}`;
    
		let params = new HttpParams().set('studentId', student_id);

		return this.httpClient.get<Student>(url, {
			params: params
		}).pipe(
			tap(data => {
        console.log(JSON.stringify(data));
			}),
			catchError(this.handleError<Student>(`getStudent student_id=${student_id}`))
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
}

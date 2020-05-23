import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Professor } from '../models/professor';
import { HttpParams, HttpClient } from '@angular/common/http';

import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  private professorsUrl = 'api/professors';


  constructor(
    private httpClient: HttpClient
  ) { }

  getProfessor(professor_id): Observable<Professor> {
    const url = `${this.professorsUrl}/${professor_id}`;
    
		let params = new HttpParams().set('professorId', professor_id);

		return this.httpClient.get<Professor>(url, {
			params: params
		  }).pipe(
			tap(data => {
        console.log(JSON.stringify(data));
			}),
			catchError(this.handleError<Professor>(`getprofessor professor_id=${professor_id}`))
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

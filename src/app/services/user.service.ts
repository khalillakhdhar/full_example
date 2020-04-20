import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../classes/user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

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

  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get<User[]>('http://localhost:8080/user').pipe(
        tap(_ => console.log('fetched Users')),
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }
  getUser(id: number): Observable<User> {
    const url = `${'http://localhost:8080/user'}/${id}`;
  
    return this.http.get<User>(url).pipe(
        tap(_ => console.log('fetched Users')),
        catchError(this.handleError<User>('getUsers'))
      );
  }
    create(user: User): Observable<any> {
      return this.http.post<User>('http://localhost:8080/user', user, httpOptions).pipe(
        tap((newUtilisateur: User) => console.log(`added user w/ id=${newUtilisateur.id}`)),
        catchError(this.handleError<User>('create'))
      );
    }
    delete(user: User | number): Observable<User> {
      const id = typeof user === 'number' ? user : user.id;
      const url = `${'http://localhost:8080/user'}/${id}`;
  
      return this.http.delete<User>(url, httpOptions).pipe(
        tap(_ => console.log(`deleted user id=${id}`)),
        catchError(this.handleError<User>('delete'))
      );
    }
}

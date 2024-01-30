import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectListService {
  url: string = 'http://localhost:3000/projectCreation';
  constructor(private http: HttpClient) {}
  public getProjects(): Observable<any> {
    return this.http.get(this.url);
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
    }
    console.log(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  updateStatus(p: any): Observable<any> {
    const updateUrl = `${this.url}/${p.id}`;
    return this.http.put<any>(updateUrl, p).pipe(catchError(this.errorHandler));
  }

  getStatusCounts(): Observable<any> {
    return this.http.get<any>(this.url).pipe(catchError(this.errorHandler));
  }
  
}

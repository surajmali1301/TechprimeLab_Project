import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateProjectService {
  apiUrl: string = 'http://localhost:3000/projectCreation/';

  constructor(private http: HttpClient) {}

  public saveProject(projectData: any): Observable<any> {
    return this.http
      .post<any>(this.apiUrl, projectData)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.errorMessage;
    } else {
      errorMessage = `Error Code:
      ${error.status}\nMessage:$
      {error.Message}`;
    }
    console.log(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  url: string = 'http://localhost:3000/projectCreation';
  constructor(private http: HttpClient) {}

  getStatusCounts(): Observable<any> {
    const statusCount=`${this.url}/status`
    return this.http.get<any>(statusCount).pipe(catchError(this.errorHandler));
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
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogInService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): any {
    return this.http.get<any>('http://localhost:3000/login').pipe(
      map((res) => {
        const user = res.find((a: any) => {
          return a.email === email && a.password === password;
        });
        return user;
      })
    );
  }
}

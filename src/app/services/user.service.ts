import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = `${environment.apiURL}api/Users`;
  login_url = `${environment.apiURL}api/Users/Login`;
  constructor(private router: Router, private http: HttpClient) {
  }

  addUser(user: User): Observable<number> {
    return this.http.post<number>(this.url, user);
  }

  getUser(user: User): Observable<User> {
    return this.http.post<User>(this.login_url, user);
  }

}

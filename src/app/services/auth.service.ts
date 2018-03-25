import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';

import { User } from '../models/user';

@Injectable()
export class AuthService {
  private BASE_URL: string = '/api/v1/accounts';

  constructor(private http: HttpClient) {}

  signUp(
    username: string,
    first_name: string,
    last_name: string,
    password: string,
    photo: any
  ): Observable<User> {
    let url: string = `${this.BASE_URL}/sign-up/`;
    let formData: FormData = new FormData();
    formData.append('username', username);
    formData.append('first_name', first_name);
    formData.append('last_name', last_name);
    formData.append('password1', password);
    formData.append('password2', password);
    formData.append('photo', photo);
    return this.http.request('POST', url, {body: formData})
      .map((user: any) => {
        return User.create(user);
      });
  }

  logIn(username: string, password: string): Observable<User> {
    let url: string = `${this.BASE_URL}/log-in/`;
    return this.http.post(url, {username, password})
      .map((user: any) => {
        return User.create(user);
      })
      .do((user: User) => localStorage.setItem('neopantry.user', JSON.stringify(user)));
  }

  logOut(): Observable<any> {
    let url: string = `${this.BASE_URL}/log-out/`;
    return this.http.delete(url)
      .finally(() => localStorage.removeItem('neopantry.user'));
  }
}

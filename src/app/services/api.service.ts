import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';


@Injectable()
export class ApiService {
  authToken: string;
  user: any;

  constructor(private http: Http) {

  }

  registerUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const ep = this.buildUrl('auth/signup');
    return this.http.post(ep, user, {headers: headers}).map(res => res.json());
  }

  loginUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const ep = this.buildUrl('auth/login');
    return this.http.post(ep, user, {headers: headers}).map(res => res.json());
  }

  getProfile() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = this.buildUrl('auth');
    return this.http.get(ep, {headers: headers}).map(res => res.json());
  }

  classifyImage(image) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'multipart/form-data');
    const formData = new FormData();
    formData.append('image', image);
    const ep = this.buildUrl('burns/classify');
    return this.http.post(ep, formData, {headers: headers}).map((res) => res.json());
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  getUserData() {
    return JSON.parse(localStorage.getItem('user'));
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired();
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  buildUrl(ep) {
    return 'http://127.0.0.1:8080/' + ep;
  }
}

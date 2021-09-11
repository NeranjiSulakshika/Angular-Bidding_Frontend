import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse, HttpClientModule } from '@angular/common/http';
import {  observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly rootUrl = 'http://localhost:4200/user';
  constructor(private http : HttpClient) { }

  registerUser(users : User) {
    console.log(users);
    return;
    // return this.http.post(this.baseURL, users);
  }

  // registerUser(user : User) 
  // {
  //   const body : User = 
  //   {
  //     'FirstName': user.FirstName,
  //     'SurName': user.SurName,
  //     'Email': user.Email,
  //     'Password': user.Password
  //   }
  //   return console.log(body);
    // return this.http.post(this.rootUrl + '/home/home.component.html/', body);
    //return this.http.get("/api/MediaItem").map((response: { json: () => any; }) => response.json());
    //return console.log(this.http.post('',body));
    
  // }
}

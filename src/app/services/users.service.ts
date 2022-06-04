
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private url='https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  buscarTodosUsers(){
    return this.http.get(this.url);
    }
}

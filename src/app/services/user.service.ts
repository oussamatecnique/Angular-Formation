import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/User";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  apiUrl: string = "http://monapi.com";
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    // TO CHECK
    return this.http.get<User[]>("http://localhost:3000/users");
  }

  createUser(user: User): Observable<User> {
    // TO CHECK
    return this.http.post<User>("http://localhost:3000/users", user);
  }
}

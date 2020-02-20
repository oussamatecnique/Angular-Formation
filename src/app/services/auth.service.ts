import { Injectable } from "@angular/core";
import { User } from "../models/User";

@Injectable()
export class AuthService {
  token: string;
  user: User;
  constructor() {}

  login(user, password) {
    if (user === "admin") {
      this.token = "12123123";
      this.user = {
        firstName: "Admin",
        lastName: "Admin"
      };
    }
  }

  getToken() {
    return this.token;
  }

  logout() {
    this.token = "";
  }

  getUser() {
    return this.user;
  }

  isAuthenticated() {
    return !!this.token;
  }
}

import { Component } from "@angular/core";
import { User } from "./models/User";
import { UserService } from "./services/user.service";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  myClass = "danger";
  url = "/image";
  user: User;
  public users: User[];
  public hasAlert: string = "";
  public alertMessage: string = "";

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  onLogin({ login, password }) {
    this.authService.login(login, password);
    this.user = this.authService.getUser();
  }

  onAddUser(user) {
    this.user = user;
    this.userService.createUser(this.user).subscribe(
      data => {
        this.hasAlert = "success";
        this.alertMessage = "Added successfuly!";
        this.users.push(data);
      },
      err => {
        this.hasAlert = "danger";
        this.alertMessage = err.message;
        console.log(err);
      },
      () => {
        if (this.users.length > 5) {
          this.hasAlert = "danger";
          this.alertMessage = "You have more than 5 users !!";
        }
      }
    );

    setTimeout(() => {
      this.hasAlert = "";
      this.alertMessage = "";
    }, 10000);
  }

  onAlertClose() {
    this.hasAlert = "";
    this.alertMessage = "";
  }
}

import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.css"]
})
export class UserFormComponent implements OnInit {
  @Output() submit = new EventEmitter();
  private id = 0;

  firstName: string;
  lastName: string;
  age: number;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.submit.emit({
      id: this.id++,
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age
    });
  }
}

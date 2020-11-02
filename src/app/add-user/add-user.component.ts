import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { UserService } from "../shared/services/user.service";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"],
})
export class AddUserComponent implements OnInit {
  @ViewChild("input") public el: ElementRef;

  constructor(private userSevice: UserService) {}

  ngOnInit() {}

  addUser() {
    const username: string = this.el.nativeElement.value;
    if (username) {
      this.userSevice.addUser(username);
      this.el.nativeElement.value = "";
    }
  }
}

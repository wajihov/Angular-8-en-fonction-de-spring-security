import { Component, OnInit } from "@angular/core";
import { AuthServiceService } from "../services/auth-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  mode: number = 0;
  constructor(
    private serviceAuthen: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit() {}

  onLogin(user) {
    this.serviceAuthen.login(user).subscribe(
      resp => {
        let jwt = resp.headers.get("Authorization");
        this.serviceAuthen.saveToken(jwt);
        this.router.navigateByUrl("/tasks");
      },
      error => {
        this.mode = 1;
      }
    );
  }
}

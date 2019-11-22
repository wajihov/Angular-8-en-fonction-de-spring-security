import { Component, OnInit } from "@angular/core";
import { AuthServiceService } from "../services/auth-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"]
})
export class TasksComponent implements OnInit {
  tasks;

  constructor(public serviceAuth: AuthServiceService, private router: Router) {}

  ngOnInit() {
    this.serviceAuth.getTasks().subscribe(
      data => {
        this.tasks = data;
      },
      error => {
        this.serviceAuth.logout();
        this.router.navigateByUrl("/login");
      }
    );
  }
  newTask() {
    this.router.navigateByUrl("/new-task");
  }
}

import { Component, OnInit } from "@angular/core";
import { AuthServiceService } from "../services/auth-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-tasks",
  templateUrl: "./new-tasks.component.html",
  styleUrls: ["./new-tasks.component.css"]
})
export class NewTasksComponent implements OnInit {
  mode: number = 0;
  task: any;

  constructor(
    private serviceAuth: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSaveTask(data) {
    console.log("ds On save task : ", data);
    
    this.serviceAuth.saveTask(data).subscribe(
      resp => {
        this.task = resp;
        this.router.navigateByUrl("/tasks");
      },
      error => {
        this.mode = 1;
        console.log(error);
      }
    );
  }
}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { TasksComponent } from "./tasks/tasks.component";
import { NewTasksComponent } from "./new-tasks/new-tasks.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "tasks", component: TasksComponent },
  { path: "new-task", component: NewTasksComponent },
  { path: "register", component: RegisterComponent },
  { path: "", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

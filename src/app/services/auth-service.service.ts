import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtHelper } from "angular2-jwt";

@Injectable({
  providedIn: "root"
})
export class AuthServiceService {
  private host: string = "http://localhost:8080";
  private jwtToken = null;
  private roles: any = [];
  constructor(private http: HttpClient) {}

  login(user) {
    return this.http.post(this.host + "/login", user, { observe: "response" });
  }

  saveToken(jwt: string) {
    this.jwtToken = jwt;
    localStorage.setItem("token", jwt);
    let jwtHelper = new JwtHelper();
    this.roles = jwtHelper.decodeToken(this.jwtToken).roles;
  }

  getTasks() {
    if (this.jwtToken == null) this.loadToken();
    return this.http.get(this.host + "/tasks", {
      headers: new HttpHeaders({ authorization: this.jwtToken })
    });
  }

  loadToken() {
    this.jwtToken = localStorage.getItem("token");
  }

  logout() {
    localStorage.removeItem("token");
    this.jwtToken = null;
  }

  isAdmin() {
    for (let r of this.roles) {
      if (r.authority == "ADMIN") return true;
    }
    return false;
  }

  saveTask(data) {
    return this.http.post(this.host + "/tasks", data, {
      headers: new HttpHeaders({ "authorization": this.jwtToken })
    });
  }
}

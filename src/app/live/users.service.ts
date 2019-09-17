import { User } from "./user.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class UsersService {
  private users: User[] = [];
  private usersUpdated = new Subject<User[]>();

  constructor(private http: HttpClient) {}

  getUsers() {
    this.http
      .get<{ message: string; users: User[] }>("http://localhost:3000/users")
      .subscribe(userData => {
        this.users = userData.users;
        this.usersUpdated.next([...this.users]);
      });
  }

  getUserUpdateListener() {
    return this.usersUpdated.asObservable();
  }

  addUser(id: string, name: string, email: string, password: string) {
    const user: User = {
      id: null,
      name: name,
      email: email,
      password: password
    };
    this.http
      .post<{ message: string }>("http://localhost:3000/users", user)
      .subscribe(responseData => {
        console.log("User added? = ", responseData.message);
        this.users.push(user);
        this.usersUpdated.next([...this.users]);
      });
  }
}

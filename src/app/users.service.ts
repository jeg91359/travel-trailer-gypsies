import { User } from "./user.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({ providedIn: "root" })
export class UsersService {
  private users: User[] = [];
  private usersUpdated = new Subject<User[]>();

  constructor(private http: HttpClient) {}

  getUsers() {
    this.http
      .get<{ message: string; users: any }>(
        "http://localhost:3000/users"
        )
      .pipe(map((userData) => {
        return userData.users.map(user => {
           return {
            id: user._id,
            username: user.username,
            password: user.password
           };
        });
      }))
      .subscribe(transformedUsers => {
        this.users = transformedUsers;
      });
  }

  getUserUpdateListener() {
    return this.usersUpdated.asObservable();
  }
}

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
            email: user.email,
            password: user.password
           };
        });
      }))
      .subscribe(transformedUsers => {
        this.users = transformedUsers;
        //this.usersUpdated.next([...this.users]);
      });
  }

  getUserUpdateListener() {
    return this.usersUpdated.asObservable();
  }

  // addUser(id: string, email: string, password: string) {
  //   const user: User = {
  //     email: email,
  //     password: password
  //   };
  //   this.http
  //     .post<{ message: string }>(
  //       "http://localhost:3000/user/register", user
  //       )
  //     .subscribe(responseData => {
  //       console.log("User added? = ", responseData.message);
  //       this.users.push(user);
  //       this.usersUpdated.next([...this.users]);
  //     });
  // }

  // login(email: string, password: string){
  //   const user: User = {
  //     email: email,
  //     password: password
  //   };
  //   this.http.post("http://localhost:3000/user/login", user)
  //   .subscribe(response => {
  //     console.log(response);
  //   })
  // }
}

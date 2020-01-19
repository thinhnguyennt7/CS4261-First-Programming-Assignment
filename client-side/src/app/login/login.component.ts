import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public tab: string = "login";
  public username: string;
  public password: string;

  constructor(private httpClient: HttpClientService) { }

  ngOnInit() {
  }

  loginTabClick(event: any): void {
    if (event.index == 0) {
      this.tab = "login";
    } else if (event.index == 1) {
      this.tab = "register";
    }
  }

  reset(): void {
    this.username = "";
    this.password = "";
  }

  login() {
    // console.log(this.tab);
    // console.log(this.username);
    // console.log(this.password)
    this.httpClient.get("/v1/account").subscribe((data) => {
      console.log(data);
    })
  }
}

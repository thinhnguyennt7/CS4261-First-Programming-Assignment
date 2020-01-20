import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public tab: string = "login";
  public email: string;
  public password: string;
  public confirmPassword: string;
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('',[Validators.required])
  });

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
    this.email = "";
    this.password = "";
    this.confirmPassword = ""
  }

  login() {
    this.httpClient.get("/v1/account").subscribe((data) => {
      console.log(data);
    })
  }
}

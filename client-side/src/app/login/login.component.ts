import { Component } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  public tab: string = "login";
  public email: string = "";
  public password: string = "";
  public confirmPassword: string = "";
  public username: string = "";
  public dob: string = "";
  public phone: string = "";
  public name: string = "";
  public error: boolean = false;
  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl(''),
    phone: new FormControl(''),
    dob: new FormControl(''),
    email: new FormControl(''),
    confirmPassword: new FormControl('')
  });

  constructor(private httpClient: HttpClientService) { }

  loginTabClick(event: any): void {
    if (event.index == 0) {
      this.tab = "login";
    } else if (event.index == 1) {
      this.tab = "register";
    }
    this.reset();
  }

  reset(): void {
    this.username = "";
    this.password = "";
    this.confirmPassword = "";
    this.email = "";
    this.dob = "";
    this.phone = "";
    this.name = "";
  }

  login() {
    this.error = false;
    this.httpClient.post("/v1/account/verify", {
      username: this.username,
      password: this.password
    }).subscribe((res) => {
      if (res.status == "true") {
        this.tab = "info";
        this.httpClient.get("/v1/account/" + this.username).subscribe(res => {
          var data = res.data;
          this.username = data.username;
          this.password = data.password;
          this.email = data.email || "N/A";
          this.phone = data.phone || "N/A";
          this.dob = data.dob || "N/A";
          this.name = data.name || "N/A";
        })
      } else {
        this.error = true;
      }
    })
  }

  logout(): void {
    this.reset();
    this.tab = "login";
  }

  register() {
    this.httpClient.post("/v1/account", {
      username: this.username,
      password: this.password,
      name: this.name,
      phone: this.phone,
      dob: this.dob,
      email: this.email
    }).subscribe((res) => {
      if (res.status == "false") {
        this.error = true;
      } else {
        this.tab = "info";
        this.email = this.email || "N/A";
        this.phone = this.phone || "N/A";
        this.dob = this.dob || "N/A";
        this.name = this.name || "N/A";
      }
    })
  }
}
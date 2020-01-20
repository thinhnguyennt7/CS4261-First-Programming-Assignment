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
  public email: string = "";
  public password: string = "";
  public confirmPassword: string = "";
  public username: string = "";
  public dob: string = "";
  public phone: string = "";
  public name: string = "";
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
    this.confirmPassword = "";
    this.email = "";
    this.dob = "";
    this.phone = "";
  }

  login() {
    this.httpClient.get("/v1/account").subscribe((data) => {
      console.log(data);
    })
  }

  register() {
    var data = {
      username: this.username,
      password: this.password,
      name: this.name,
      phone: this.phone,
      dob: this.dob,
      email: this.email
    }
    console.log(data)
    // this.httpClient.post("/v1/account", {
    //   username: this.username,
    //   password: this.password,
    //   name: this.name,
    //   phone: this.phone,
    //   dob: this.dob,
    //   email: this.email
    // }).subscribe((res) => {
    //   console.log(res);
    // })
  }
}
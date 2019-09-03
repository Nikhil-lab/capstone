import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./signin.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService, private router: Router, private location: Location) { }

  ngOnInit() {
  }

  onSubmit(){
    this._authService.login();
    console.log("Logged In");
    this.location.back();
  }

}

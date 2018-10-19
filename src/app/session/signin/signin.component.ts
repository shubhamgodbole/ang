import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public form: FormGroup;
  errorMsg;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService ) {}

  ngOnInit() {
    this.form = this.fb.group ( {
      email: [null , Validators.compose ( [ Validators.required ] )] , password: [null , Validators.compose ( [ Validators.required ] )]
    } );
  }

  onSubmit() {
    let loginData = {
      email: this.form.controls.email.value,
      pwd: this.form.controls.password.value
    }
    this.authService.login(loginData)
      .then((response) => {
        debugger
        if (response.response.length > 0) {
          localStorage.setItem('userID', response.response[0].uid);
          localStorage.setItem('userTypeID', response.response[0].utid);
          this.router.navigate( ['/pages/project'] );
        }
      })
      .catch((error) => {
        console.log(error);
        this.errorMsg = error.error.message;
      });
  }

}

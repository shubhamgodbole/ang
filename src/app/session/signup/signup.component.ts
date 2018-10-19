import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import {AuthService} from '../../services/auth.service';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public form: FormGroup;
  userType: any;
  errorMsg;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.getUserType();
    this.form = this.fb.group( {
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      user_type:[null, Validators.required ],
      password: password,
      confirmPassword: confirmPassword
    } );
  }
  getUserType() {
    this.authService.getUserType()
      .then((response) => {
        this.userType = response;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  checkEmail() {
    console.log(this.form.value);
    this.authService.getAllUser()
      .then((user) => {
        user.forEach((u) => {
          if (u.email === this.form.controls.email.value) {
            this.errorMsg = 'this email is already exist';
          }
          else {
            this.errorMsg = '';
          }
        });
      });
  }
  onSubmit() {
    let userData = {
      email: this.form.controls.email.value,
      password: this.form.controls.password.value,
      user_type: this.form.controls.user_type.value,
    }
    this.authService.registration(userData)
      .then((response) => {
        localStorage.setItem('userID', response.response[0].uid);
        localStorage.setItem('userTypeID', response.response[0].utid);
        this.router.navigate( ['/verifyEmail'] );
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

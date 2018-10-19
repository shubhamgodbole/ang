import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-sucess-verify-email',
  templateUrl: './sucess-verify-email.component.html',
  styleUrls: ['./sucess-verify-email.component.scss']
})
export class SucessVerifyEmailComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.verifyUser();
  }
  login() {
    this.router.navigate( ['/session/signin'] );
  }
}

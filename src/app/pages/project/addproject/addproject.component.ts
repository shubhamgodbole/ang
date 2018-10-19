import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "ng2-validation";
import {MatDialog} from "@angular/material";
import {ProjectService} from '../../../services/project.service';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.scss']
})
export class AddprojectComponent implements OnInit {
  public form: FormGroup;
  employee: any;
  constructor(public dialog: MatDialog, private fb: FormBuilder, private authService: AuthService, private projectService: ProjectService) { }

  ngOnInit() {
    this.getUsers();
    this.form = this.fb.group( {
      title: ['', Validators.required],
      description: [''],
      user: [''],
    } );
  }
  onSubmit() {
    let users = [];
    if (this.form.controls.user.value) {
      this.form.controls.user.value.map((us) => {
        users.push(us.uid);
      });
    }
    let projectData = {
      title: this.form.controls.title.value,
      desc: this.form.controls.description.value,
      users: users,
      created: localStorage.getItem('userID')
    };
    console.log(projectData);
    this.projectService.addProject(projectData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
    this.dialog.closeAll();
  }
  getUsers() {
    this.authService.getAllUser()
      .then((response) => {
        this.employee = response;
      })
      .then((error) => {
        console.log(error);
      });
  }
}

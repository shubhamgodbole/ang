import { Component, OnInit } from '@angular/core';
import {AddprojectComponent} from "./addproject/addproject.component";
import {MatDialog, MatDialogRef} from "@angular/material";
import {ProjectService} from '../../services/project.service';
import {EditprojectComponent} from './editproject/editproject.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  rows = [];
  dialogRef: MatDialogRef<AddprojectComponent> | null;
  dialogRefEdit: MatDialogRef<EditprojectComponent> | null;
  userTypeid;
  constructor(public dialog: MatDialog, private projectService: ProjectService, private router: Router) {
  }

  fetch() {
    this.userTypeid = localStorage.getItem('userTypeID');
    this.projectService.getAllProject()
      .then((response) => {
          this.rows = response;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  ngOnInit() {
    this.fetch();
  }
  openJazz() {
    this.dialogRef = this.dialog.open(AddprojectComponent);

    this.dialogRef.beforeClose().subscribe((result: string) => {

    });
    this.dialogRef.afterClosed().subscribe((result: string) => {
      this.fetch();
      this.dialogRef = null;
    });
  }
  edit(row) {
    this.dialogRefEdit = this.dialog.open(EditprojectComponent, {
      data: row,
    });

    this.dialogRefEdit.beforeClose().subscribe((result: string) => {

    });
    this.dialogRefEdit.afterClosed().subscribe((result: string) => {
      this.fetch();
      this.dialogRefEdit = null;
    });
  }
  delete(id) {
    this.projectService.deleteProject(id)
      .then((response) => {
        console.log(response);
        this.fetch();
      })
      .catch((error) => {
      });
  }
  gotoTaskBoard(id) {
    localStorage.setItem('projectID', id);
    this.router.navigate( ['/taskboard'] );
  }
}

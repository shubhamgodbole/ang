import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProjectService} from '../../../services/project.service';

@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.scss']
})
export class EditprojectComponent implements OnInit {

  public form: FormGroup;
  constructor(public dialog: MatDialog, private fb: FormBuilder, private projectService: ProjectService, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log('editModal', data);
  }

  ngOnInit() {
    this.form = this.fb.group( {
      title: [this.data.title, Validators.required],
      description: [this.data.description]
    } );
  }

  onSubmit() {
    let projectData = {
      title: this.form.controls.title.value,
      description: this.form.controls.description.value,
      pid: this.data.pid
    }
    this.projectService.editProject(projectData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
    this.dialog.closeAll();
  }
}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material";
import {AuthService} from '../../services/auth.service';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  employee: any;
  public form: FormGroup;
  fildata;
  filename;
  formData = new FormData();
  constructor(public dialog: MatDialog, private fb: FormBuilder, private authService: AuthService, private taskServise: TaskService) { }

  ngOnInit() {
    this.getUsers();
    this.form = this.fb.group( {
      title: ['', Validators.required],
      description: [''],
      user: [''],
      attechment: ['']
    } );
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
  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
     // this.fildata = URL.createObjectURL(event.target.files[0]);
      const [file] = event.target.files;
      // this.formData.append('file', file, file.name);
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.fildata = reader.result;
        this.filename = file.name;
        /*this.form.patchValue({
          attechment: reader.result
        });*/

      };
    }
  }
  onSubmit() {
    debugger
    let uid = [];
    if (this.form.controls.user.value) {
      this.form.controls.user.value.map((us) => {
        uid.push(us.uid);
      });
    }
   let taskData= {
     title: this.form.controls.title.value,
     desc: this.form.controls.description.value,
     uid : uid,
     fup: this.fildata,
     fname: this.filename,
     pid: localStorage.getItem('projectID'),
   };
    console.log(taskData);
  debugger
    this.taskServise.addTask(taskData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    this.dialog.closeAll();
  }
}

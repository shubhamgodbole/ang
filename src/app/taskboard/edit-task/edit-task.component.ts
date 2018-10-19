import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {TaskService} from '../../services/task.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  employee: any;
  public form: FormGroup;
  fildata;
  tempPath;
  chk;
  formData = new FormData();
  utid;
  users: any = [];
  filename;
  shoImg: boolean = false;
  constructor(public dialog: MatDialog, private fb: FormBuilder, private authService: AuthService, private taskServise: TaskService, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log('editModal', data);
    let type = data.fname.split('.');
    type.forEach((data) => {
      if (data === 'jpg' || data === 'jpgeg' || data === 'png') {
        this.shoImg = true;
      }
    });
  }

  ngOnInit() {
    this.utid = localStorage.getItem('userTypeID');
    this.getUsers();
    this.form = this.fb.group( {
      title: [this.data.title, Validators.required],
      description: [this.data.description],
      user: [this.data.uid],
      attechment: ['']
    } );
  }

  getUsers() {
    this.authService.getAllUser()
      .then((response) => {
        debugger
        response.forEach((user) => {
          debugger
          let uids = this.data.users.split(',');
          uids.forEach((uid) => {
            debugger
            if (user.uid === parseInt(uid)) {
              debugger
              this.users.push(user);
            }
          });
        });
        this.employee = response;
        console.log('user for this task', this.users);
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
    let uid = [];
    if (this.form.controls.user.value) {
      this.form.controls.user.value.map((us) => {
        uid.push(us.uid);
      });
    }
    let taskData= {
      tid: this.data.id,
      title: this.form.controls.title.value,
      desc: this.form.controls.description.value,
      uid : uid != null ? uid : this.data.uid,
      fup: this.fildata,
      fname: this.filename,
      pid: localStorage.getItem('projectID'),
    };
    console.log('edit', taskData);
    this.taskServise.editTask(taskData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    this.dialog.closeAll();
  }

}

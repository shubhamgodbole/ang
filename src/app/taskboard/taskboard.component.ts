/* tslint:disable:max-line-length */
import {Component, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddTaskComponent } from './add-task/add-task.component';
import {TaskService} from '../services/task.service';
import {EditTaskComponent} from './edit-task/edit-task.component';

interface Tasks {
  title: string;
  description: string;
  class?: string;
}

interface Taskboard {
  title: string;
  tasks: Tasks[];
}

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss']
})
export class TaskboardComponent implements OnInit {
  taskboard: Taskboard[] = [
    {
    title: 'New',
    tasks: []
  },

     {
    title: 'In Process',
    tasks: [{
      title: 'Integrate Angular 4',
      description: 'Nulla vitae elit libero, a pharetra augue.'
    }]
  },
    {
    title: 'ready to test',
    tasks: [{
      title: 'Integrate Angular 4',
      description: 'Nulla vitae elit libero, a pharetra augue.'
    }]
  },
    {
      title: 'to review',
      tasks: [{
        title: 'Integrate Angular 4',
        description: 'Nulla vitae elit libero, a pharetra augue.'
      }, ]
    },
    {
    title: 'Complete',
    tasks: [{
      title: 'Store new files',
      description: 'Sed posuere consectetur est at lobortis.'
    }, ]
  }];
  dialogRef: MatDialogRef<AddTaskComponent> | null;
  dialogEditRef: MatDialogRef<EditTaskComponent> | null;
  projectID;
  userTypeid;
  constructor(public dialog: MatDialog, private taskService: TaskService) {}

  ngOnInit() {
    // this.taskboard.push({"title": "new card"})
    this.userTypeid = localStorage.getItem('userTypeID');
    this.showAllTask();
  }
  showAllTask() {
    this.taskboard[0].tasks = [];
    this.taskService.showTask()
      .then((response) => {
        console.log(response);
        response.forEach((tasks) => {
          let task = {
            id: tasks.tid,
            title: tasks.title,
            description: tasks.description,
            users: tasks.uid,
            attechment: tasks.attechment,
            fname: tasks.fname
          };
          this.taskboard.forEach((tsk) => {
            if (tsk.title === 'New') {
              tsk.tasks.push(task);
            }
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  addTask() {
    this.dialogRef = this.dialog.open(AddTaskComponent);

    this.dialogRef.beforeClose().subscribe((result: string) => {

    });
    this.dialogRef.afterClosed().subscribe((result: string) => {
      this.showAllTask();
      this.dialogRef = null;
    });
  }
  editTask(task) {
    this.dialogEditRef = this.dialog.open(EditTaskComponent, {
      data: task,
    });

    this.dialogEditRef.beforeClose().subscribe((result: string) => {

    });
    this.dialogEditRef.afterClosed().subscribe((result: string) => {
      let userTypeid = localStorage.getItem('userTypeID');
      // if (userTypeid === '1')
       this.showAllTask();
      this.dialogEditRef = null;
    });
  }
}

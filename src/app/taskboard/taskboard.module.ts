import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { TaskboardRoutes } from './taskboard.routing';
import { TaskboardComponent } from './taskboard.component';
import { AddTaskComponent } from './add-task/add-task.component';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatInputModule, MatSelectModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FileUploadModule} from "ng2-file-upload/ng2-file-upload";
import { EditTaskComponent } from './edit-task/edit-task.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TaskboardRoutes),
    DragulaModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  declarations: [
    TaskboardComponent,
    AddTaskComponent,
    EditTaskComponent
  ],
  entryComponents: [
    AddTaskComponent,
    EditTaskComponent
  ]

})

export class TaskboardModule {}

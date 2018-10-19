import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  animals:any = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];
  public form: FormGroup;
  constructor(public dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group( {
      title: ['', Validators.required],
      description: [''],
      user: [''],
      attechment: ['']
    } );
  }

}

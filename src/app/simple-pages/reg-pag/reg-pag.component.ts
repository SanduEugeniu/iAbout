import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-reg-pag',
  templateUrl: './reg-pag.component.html',
  styleUrls: ['./reg-pag.component.css']
})
export class RegPagComponent{
  constructor(public dialog: MatDialog) {}
  numerTele: any;


  myGroup = new FormGroup({
    numerTele: new FormControl()
  });

  arataNM(): void {
    console.log(this.numerTele);
  }

  openDialog(): void {
    this.dialog.open(DialogElementsExampleDialog);
  }
}


@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}

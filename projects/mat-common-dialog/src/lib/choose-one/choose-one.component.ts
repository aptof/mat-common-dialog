import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { AptofChooseOneData } from '../data';

@Component({
  selector: 'aptof-choose-one',
  templateUrl: './choose-one.component.html',
  styleUrls: ['./choose-one.component.css']
})
export class AptofChooseOneComponent implements OnInit {

selectedValue;
  
constructor(public dialogRef: MatDialogRef<AptofChooseOneComponent>, @Inject(MAT_DIALOG_DATA) public data: AptofChooseOneData) { }

ngOnInit() {
  this.selectedValue = this.data.selectedValue;
}

}

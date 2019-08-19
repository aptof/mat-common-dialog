import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { AptofNumberData } from '../data';

@Component({
  selector: 'aptof-enter-number',
  templateUrl: './enter-number.component.html',
  styleUrls: ['./enter-number.component.css']
})
export class AptofEnterNumberComponent implements OnInit {

  text = new FormControl(this.data.prefilledNumber, [
      Validators.required,
      Validators.min(this.data.min),
      Validators.max(this.data.max),
    ]);

  constructor(public dialogRef: MatDialogRef<AptofEnterNumberComponent>, @Inject(MAT_DIALOG_DATA) public data: AptofNumberData) { }

  ngOnInit() {
    
  }

}

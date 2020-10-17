import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AptofNumberData } from '../models';

@Component({
  selector: 'lib-aptof-enter-number',
  templateUrl: './aptof-enter-number.component.html',
  styleUrls: ['./aptof-enter-number.component.css'],
})
export class AptofEnterNumberComponent implements OnInit {
  text = new FormControl(this.data.prefilledNumber, [
    Validators.required,
    Validators.min(this.data.min),
    Validators.max(this.data.max),
  ]);

  constructor(
    public dialogRef: MatDialogRef<AptofEnterNumberComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AptofNumberData
  ) {
    if (this.data.max == null) {
      if (this.data.min == null) {
        this.text = new FormControl(this.data.prefilledNumber, [
          Validators.required,
        ]);
      } else {
        this.text = new FormControl(this.data.prefilledNumber, [
          Validators.required,
          Validators.min(this.data.min),
        ]);
      }
    } else {
      if (this.data.min == null) {
        this.text = new FormControl(this.data.prefilledNumber, [
          Validators.required,
          Validators.max(this.data.max),
        ]);
      } else {
        this.text = new FormControl(this.data.prefilledNumber, [
          Validators.required,
          Validators.min(this.data.min),
          Validators.max(this.data.max),
        ]);
      }
    }
  }

  ngOnInit(): void {}

  errorMessage() {
    if (this.data.min == null && this.data.max == null) {
      return 'Required';
    }
    if (this.data.min != null && this.data.max != null) {
      return `Should be between ${this.data.min} and ${this.data.max}`;
    }
    if (this.data.min == null) {
      return `Maximum ${this.data.max} is allowed`;
    }
    if (this.data.max == null) {
      return `Minimum ${this.data.min} is allowed`;
    }
  }
}

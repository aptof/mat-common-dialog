import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AptofSelectOneData } from '../models';
import { AptofSelectOneOption } from '../public-models';

@Component({
  selector: 'lib-aptof-select-one',
  templateUrl: './aptof-select-one.component.html',
  styleUrls: ['./aptof-select-one.component.css'],
})
export class AptofSelectOneComponent implements OnInit {
  selectedValue: any;

  constructor(
    public dialogRef: MatDialogRef<AptofSelectOneComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AptofSelectOneData
  ) {}

  ngOnInit(): void {
    this.selectedValue = this.data.selectedValue;
  }
}

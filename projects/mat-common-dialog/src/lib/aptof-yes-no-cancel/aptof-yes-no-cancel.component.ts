import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AptofConfirmData } from '../models';

@Component({
  selector: 'aptof-yes-no-cancel',
  templateUrl: './aptof-yes-no-cancel.component.html',
  styleUrls: ['./aptof-yes-no-cancel.component.css']
})
export class AptofYesNoCancelComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AptofYesNoCancelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AptofConfirmData
  ) {}

  ngOnInit(): void {
  }

}

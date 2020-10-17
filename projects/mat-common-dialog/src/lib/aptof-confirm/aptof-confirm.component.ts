import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AptofConfirmData } from '../models';

@Component({
  selector: 'lib-aptof-confirm',
  templateUrl: './aptof-confirm.component.html',
  styleUrls: ['./aptof-confirm.component.css'],
})
export class AptofConfirmComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AptofConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AptofConfirmData
  ) {}

  ngOnInit(): void {}
}

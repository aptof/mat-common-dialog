import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AptofConfirmData } from '../data';

@Component({
  selector: 'aptof-confirm',
  templateUrl: './aptofconfirm.component.html',
  styleUrls: ['./aptofconfirm.component.css']
})
export class AptofConfirmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AptofConfirmComponent>, @Inject(MAT_DIALOG_DATA) public data: AptofConfirmData) { }

  ngOnInit() {
  }

}

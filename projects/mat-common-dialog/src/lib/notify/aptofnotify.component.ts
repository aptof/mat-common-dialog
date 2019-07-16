import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AptofNotifyData } from '../data';

@Component({
  selector: 'aptof-notify',
  templateUrl: './aptofnotify.component.html',
  styleUrls: ['./aptofnotify.component.css']
})
export class AptofNotifyComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AptofNotifyComponent>, @Inject(MAT_DIALOG_DATA) public data: AptofNotifyData) { }

  ngOnInit() {
  }

}

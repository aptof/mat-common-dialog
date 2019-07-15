import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotifyData } from '../data';

@Component({
  selector: 'lib-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NotifyComponent>, @Inject(MAT_DIALOG_DATA) public data: NotifyData) { }

  ngOnInit() {
  }

}

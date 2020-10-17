import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AptofWarnData } from '../models';

@Component({
  selector: 'aptof-warn',
  templateUrl: './aptofwarn.component.html',
  styleUrls: ['./aptofwarn.component.css'],
})
export class AptofWarnComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AptofWarnComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AptofWarnData
  ) {}

  ngOnInit(): void {
    
  }
}

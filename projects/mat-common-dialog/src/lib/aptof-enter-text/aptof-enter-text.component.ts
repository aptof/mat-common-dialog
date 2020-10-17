import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AptofTextData } from '../models';

@Component({
  selector: 'lib-aptof-enter-text',
  templateUrl: './aptof-enter-text.component.html',
  styleUrls: ['./aptof-enter-text.component.css'],
})
export class AptofEnterTextComponent implements OnInit {
  text = new FormControl(this.data.preFilledText, [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<AptofEnterTextComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AptofTextData
  ) {}

  ngOnInit(): void {}
}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { AptofTextData } from '../data';

@Component({
  selector: 'aptof-enter-text',
  templateUrl: './enter-text.component.html',
  styles: []
})
export class AptofEnterTextComponent implements OnInit {

  text = new FormControl(this.data.prefilledText, [
  	  Validators.required
    ]);
    
  constructor(public dialogRef: MatDialogRef<AptofEnterTextComponent>, @Inject(MAT_DIALOG_DATA) public data: AptofTextData) { }

  ngOnInit() {
  }

}
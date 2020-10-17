import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AptofWarnComponent } from './aptofwarn/aptofwarn.component';



@NgModule({
  declarations: [AptofWarnComponent],
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  exports: []
})
export class AptofMatCommonDialogModule { }

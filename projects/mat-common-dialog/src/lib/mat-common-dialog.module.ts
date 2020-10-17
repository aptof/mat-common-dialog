import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AptofWarnComponent } from './warn/aptofwarn.component';

@NgModule({
  declarations: [AptofWarnComponent],
  imports: [MatDialogModule, MatButtonModule],
  exports: [],
})
export class AptofMatCommonDialogModule {}

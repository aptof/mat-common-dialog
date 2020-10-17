import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AptofWarnComponent } from './aptof-warn/aptof-warn.component';
import { AptofConfirmComponent } from './aptof-confirm/aptof-confirm.component';
import { YesNoCancelComponent } from './yes-no-cancel/yes-no-cancel.component';

@NgModule({
  declarations: [AptofWarnComponent, AptofConfirmComponent, YesNoCancelComponent],
  imports: [MatDialogModule, MatButtonModule],
  exports: [],
})
export class AptofMatCommonDialogModule {}

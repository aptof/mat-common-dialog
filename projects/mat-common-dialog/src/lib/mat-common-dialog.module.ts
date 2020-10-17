import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AptofWarnComponent } from './aptof-warn/aptof-warn.component';
import { AptofConfirmComponent } from './aptof-confirm/aptof-confirm.component';
import { AptofYesNoCancelComponent } from './aptof-yes-no-cancel/aptof-yes-no-cancel.component';
import { AptofEnterNumberComponent } from './aptof-enter-number/aptof-enter-number.component';
import { AptofEnterTextComponent } from './aptof-enter-text/aptof-enter-text.component';

@NgModule({
  declarations: [
    AptofWarnComponent,
    AptofConfirmComponent,
    AptofYesNoCancelComponent,
    AptofEnterNumberComponent,
    AptofEnterTextComponent,
  ],
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [],
})
export class AptofMatCommonDialogModule {}

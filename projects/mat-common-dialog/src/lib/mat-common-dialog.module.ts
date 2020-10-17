import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AptofWarnComponent } from './aptof-warn/aptof-warn.component';
import { AptofConfirmComponent } from './aptof-confirm/aptof-confirm.component';
import { AptofYesNoCancelComponent } from './aptof-yes-no-cancel/aptof-yes-no-cancel.component';
import { AptofEnterNumberComponent } from './aptof-enter-number/aptof-enter-number.component';
import { AptofEnterTextComponent } from './aptof-enter-text/aptof-enter-text.component';
import { AptofSelectOneComponent } from './aptof-select-one/aptof-select-one.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AptofWarnComponent,
    AptofConfirmComponent,
    AptofYesNoCancelComponent,
    AptofEnterNumberComponent,
    AptofEnterTextComponent,
    AptofSelectOneComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  exports: [],
})
export class AptofMatCommonDialogModule {}

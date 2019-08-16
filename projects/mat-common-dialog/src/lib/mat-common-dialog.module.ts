import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AptofNotifyComponent } from './notify/aptofnotify.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AptofConfirmComponent } from './confirm/aptofconfirm.component';
import { AptofEnterTextComponent } from './enter-text/enter-text.component';
import { AptofEnterNumberComponent } from './enter-number/enter-number.component';

const COMPONENTS = [
  AptofNotifyComponent,
  AptofConfirmComponent,
  AptofEnterTextComponent,
  AptofEnterNumberComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [],
  entryComponents: [...COMPONENTS]
})
export class AptofMatCommonDialogModule { }

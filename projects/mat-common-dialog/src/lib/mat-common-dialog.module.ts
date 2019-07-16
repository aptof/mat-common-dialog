import { NgModule } from '@angular/core';
import { AptofNotifyComponent } from './notify/aptofnotify.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AptofConfirmComponent } from './confirm/aptofconfirm.component';

const COMPONENTS = [
  AptofNotifyComponent,
  AptofConfirmComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    MatButtonModule,
    MatDialogModule
  ],
  exports: [],
  entryComponents: [...COMPONENTS]
})
export class AptofMatCommonDialogModule { }

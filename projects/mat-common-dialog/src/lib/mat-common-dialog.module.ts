import { NgModule } from '@angular/core';
import { NotifyComponent } from './notify/notify.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmComponent } from './confirm/confirm.component';

const COMPONENTS = [
  NotifyComponent,
  ConfirmComponent
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
export class MatCommonDialogModule { }

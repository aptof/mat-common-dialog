import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotifyComponent } from './notify/notify.component';
import { WIDTH } from './data';
import { Observable } from 'rxjs';
import { mapTo, map } from 'rxjs/operators';
import { ConfirmComponent } from './confirm/confirm.component';

@Injectable({
  providedIn: 'root'
})
export class MatCommonDialogService {

  constructor(private dialog: MatDialog) { }
  
  notify(message: string, title:string = 'Notification', buttonText:string = 'Ok'): Observable<any>{
    const dialogRef = this.dialog.open(NotifyComponent, {
      width: WIDTH,
      data: {message, title, buttonText}
    });

    return dialogRef.beforeClose().pipe(mapTo(buttonText));
  }

  confirm(message: string, title:string = 'Confirm'):Observable<any>{
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: WIDTH,
      data: {message, title}
    });

    return dialogRef.beforeClose().pipe(map(result => result == 'Yes'? 'Yes': 'No'));
  }
}

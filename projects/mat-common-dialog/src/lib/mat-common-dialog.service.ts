import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AptofNotifyComponent } from './notify/aptofnotify.component';
import { APTOF_WIDTH } from './data';
import { Observable } from 'rxjs';
import { mapTo, map } from 'rxjs/operators';
import { AptofConfirmComponent } from './confirm/aptofconfirm.component';

@Injectable({
  providedIn: 'root'
})
export class AptofMatCommonDialogService {

  constructor(private dialog: MatDialog) { }
  
  notify(message: string, title:string = 'Notification', buttonText:string = 'Ok'): Observable<any>{
    const dialogRef = this.dialog.open(AptofNotifyComponent, {
      width: APTOF_WIDTH,
      data: {message, title, buttonText}
    });

    return dialogRef.beforeClose().pipe(mapTo(buttonText));
  }

  confirm(message: string, title:string = 'Confirm', warnYes:boolean = false):Observable<any>{
    const dialogRef = this.dialog.open(AptofConfirmComponent, {
      width: APTOF_WIDTH,
      data: {message, title, warnYes}
    });

    return dialogRef.beforeClose().pipe(map(result => result == 'Yes'? 'Yes': 'No'));
  }
}

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AptofNotifyComponent } from './notify/aptofnotify.component';
import { APTOF_WIDTH } from './data';
import { Observable } from 'rxjs';
import { mapTo, map } from 'rxjs/operators';
import { AptofConfirmComponent } from './confirm/aptofconfirm.component';
import { AptofEnterTextComponent} from './enter-text/enter-text.component';
import { AptofEnterNumberComponent } from './enter-number/enter-number.component';


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

  enterText(title:string = "Enter text"):Observable<any>{
    const dialogRef = this.dialog.open(AptofEnterTextComponent, {
      width: APTOF_WIDTH,
      data: title
    });
    return dialogRef.beforeClose().pipe(map((result) => result? result: ''));
  }

  enterNumber(title:string = "Enter number", min:number = -1, max:number = -1):Observable<any>{
    const dialogRef = this.dialog.open(AptofEnterNumberComponent, {
      width: APTOF_WIDTH,
      data: {title, min, max}
    });
    return dialogRef.beforeClose().pipe(map((result) => result? result: ''));
  }
}

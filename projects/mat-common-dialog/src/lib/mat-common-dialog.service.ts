import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AptofNotifyComponent } from './notify/aptofnotify.component';
import { APTOF_WIDTH } from './data';
import { Observable } from 'rxjs';
import { mapTo, map } from 'rxjs/operators';
import { AptofConfirmComponent } from './confirm/aptofconfirm.component';
import { AptofEnterTextComponent} from './enter-text/enter-text.component';
import { AptofEnterNumberComponent } from './enter-number/enter-number.component';
import { AptofChooseOneComponent } from './choose-one/choose-one.component';
import { AptofChooseOneOption } from './public-data';


@Injectable({
  providedIn: 'root'
})
export class AptofMatCommonDialogService {

  constructor(private dialog: MatDialog) { }
  
  notify(message: string, title:string = 'Notification', buttonText:string = 'Ok'): Observable<boolean>{
    const dialogRef = this.dialog.open(AptofNotifyComponent, {
      width: APTOF_WIDTH,
      data: {message, title, buttonText}
    });

    return dialogRef.beforeClose().pipe(mapTo(true));
  }

  confirm(message: string, title:string = 'Confirm', warnYes:boolean = false):Observable<boolean>{
    const dialogRef = this.dialog.open(AptofConfirmComponent, {
      width: APTOF_WIDTH,
      data: {message, title, warnYes}
    });

    return dialogRef.beforeClose().pipe(map(result => result == 'Yes'? true: false));
  }

  enterText(title:string = "Enter text", prefilledText: string = ''):Observable<string>{
    const dialogRef = this.dialog.open(AptofEnterTextComponent, {
      width: APTOF_WIDTH,
      data: {title, prefilledText}
    });
    return dialogRef.beforeClose().pipe(map((result) => result? result: ''));
  }

  enterNumber(title:string = "Enter number", min:number = 0, max:number = 50000000, prefilledNumber: number = 0):Observable<number>{
    const dialogRef = this.dialog.open(AptofEnterNumberComponent, {
      width: APTOF_WIDTH,
      data: {title, min, max, prefilledNumber}
    });
    return dialogRef.beforeClose().pipe(map((result) => result? result: ''));
  }

  selectOne(title:string = 'Select one', options: AptofChooseOneOption[] = [], selectedValue:any = ''):Observable<any>{
    const dialogRef = this.dialog.open(AptofChooseOneComponent, {
      width: APTOF_WIDTH,
      data: {title, options, selectedValue}
    });

    return dialogRef.beforeClose().pipe(map((result)=>result? result: ''));
  }
}

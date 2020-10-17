import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { mapTo, map } from 'rxjs/operators';
import { AptofWarnComponent } from './aptofwarn/aptofwarn.component';
import { APTOF_WIDTH } from './models';

@Injectable({
  providedIn: 'root'
})
export class AptofMatCommonDialogService {

  constructor(private dialog: MatDialog) { }

  warn(message: string, title:string = 'Warning', buttonText:string = 'Ok'): Observable<boolean>{
    const dialogRef = this.dialog.open(AptofWarnComponent, {
      width: APTOF_WIDTH,
      data: {message, title, buttonText}
    });

    return dialogRef.beforeClosed().pipe(mapTo(true));
  }
}

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { mapTo, map } from 'rxjs/operators';
import { APTOF_WIDTH } from './models';
import { AptofWarnComponent } from './aptof-warn/aptof-warn.component';
import { AptofConfirmComponent } from './aptof-confirm/aptof-confirm.component';

@Injectable({
  providedIn: 'root',
})
export class AptofMatCommonDialogService {
  constructor(private dialog: MatDialog) {}

  warn(
    message: string,
    title: string = 'Warning',
    buttonText: string = 'Ok'
  ): Observable<boolean> {
    const dialogRef = this.dialog.open(AptofWarnComponent, {
      width: APTOF_WIDTH,
      data: { message, title, buttonText },
    });

    return dialogRef.beforeClosed().pipe(mapTo(true));
  }

  confirm(
    message: string,
    title: string = 'Confirm',
    warnYes: boolean = false
  ): Observable<boolean> {
    const dialogRef = this.dialog.open(AptofConfirmComponent, {
      width: APTOF_WIDTH,
      data: { message, title, warnYes },
    });

    return dialogRef
      .beforeClosed()
      .pipe(map((result) => (result == 'Yes' ? true : false)));
  }
}

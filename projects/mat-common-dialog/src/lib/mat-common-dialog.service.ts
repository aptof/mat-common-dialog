import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { mapTo, map } from 'rxjs/operators';
import { APTOF_WIDTH } from './models';
import { AptofWarnComponent } from './aptof-warn/aptof-warn.component';
import { AptofConfirmComponent } from './aptof-confirm/aptof-confirm.component';
import { AptofYesNoCancelComponent } from './aptof-yes-no-cancel/aptof-yes-no-cancel.component';
import { AptofEnterNumberComponent } from './aptof-enter-number/aptof-enter-number.component';
import { AptofEnterTextComponent } from './aptof-enter-text/aptof-enter-text.component';

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

  yesNoCancel(
    message: string,
    title: string = 'Save',
    warnYes: boolean = false
  ): Observable<string> {
    const dialogRef = this.dialog.open(AptofYesNoCancelComponent, {
      width: APTOF_WIDTH,
      data: { message, title, warnYes },
    });

    return dialogRef.beforeClosed().pipe(map((result) => result));
  }

  enterNumber(
    title: string = 'Enter number',
    min: number = null,
    max: number = null,
    preFilledNumber: number = null
  ): Observable<number> {
    const dialogRef = this.dialog.open(AptofEnterNumberComponent, {
      width: APTOF_WIDTH,
      data: { title, min, max, preFilledNumber },
    });
    return dialogRef
      .beforeClosed()
      .pipe(map((result) => (result ? result : '')));
  }

  enterText(
    title: string = 'Enter text',
    preFilledText: string = ''
  ): Observable<string> {
    const dialogRef = this.dialog.open(AptofEnterTextComponent, {
      width: APTOF_WIDTH,
      data: { title, preFilledText },
    });
    return dialogRef
      .beforeClosed()
      .pipe(map((result) => (result ? result : '')));
  }
}

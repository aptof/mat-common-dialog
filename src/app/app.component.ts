import { Component } from '@angular/core';
import {
  AptofMatCommonDialogService,
  AptofSelectOneOption,
} from 'mat-common-dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'workspace';
  message = 'result will appear here';

  constructor(private dialogService: AptofMatCommonDialogService) {}

  warn() {
    this.dialogService
      .warn(
        'If you exit now the items will not be saved',
        'Before you go',
        'Understood'
      )
      .subscribe((result) => (this.message = result.toString()));
  }

  confirm() {
    this.dialogService
      .confirm('Are you sure to logout?')
      .subscribe((result) => (this.message = result.toString()));
  }

  yesNoCancel() {
    this.dialogService
      .yesNoCancel('Do you want to save?')
      .subscribe((result) => (this.message = result));
  }

  enterNumber() {
    this.dialogService
      .enterNumber('Enter your mobile', 5000000000)
      .subscribe((result) => (this.message = result.toString()));
  }

  enterText() {
    this.dialogService
      .enterText('Enter your name', 'John Doe')
      .subscribe((result) => (this.message = result));
  }

  selectOne() {
    let options: AptofSelectOneOption[] = [
      { value: 10001, face: 'Cake' },
      { value: 10005, face: 'Pizza' },
      { value: 10007, face: 'Burger' },
    ];
    this.dialogService
      .selectOne('Order one food', options, 10005)
      .subscribe((result) => (this.message = result));
  }
}

import { Component } from '@angular/core';
import { AptofMatCommonDialogService } from 'mat-common-dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'workspace';
  message = 'result will appear here';

  constructor(private dialogService: AptofMatCommonDialogService) {}

  warn() {
    this.dialogService
      .warn('If you exit now the items will not be saved')
      .subscribe((result) => (this.message = result.toString()));
  }
}
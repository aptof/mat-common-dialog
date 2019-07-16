import { Component } from '@angular/core';
import { MatCommonDialogService } from 'mat-common-dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private matSrvice: MatCommonDialogService){}

  notify(){
    this.matSrvice.notify("You are notified for your fault. Be careful next time").subscribe((resutl)=>console.log(resutl));
  }

  confirm(){
    this.matSrvice.confirm("Are you sure to logout?", 'Confirm?', true).subscribe((result)=>console.log(result));
  }
}

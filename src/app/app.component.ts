import { Component } from '@angular/core';
import { AptofMatCommonDialogService } from 'mat-common-dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message = 'Result will appear here';

  constructor(private matSrvice: AptofMatCommonDialogService){}

  notify(){
    this.matSrvice.notify("You are notified for your fault. Be careful next time").subscribe((result)=>this.message = result);
  }

  confirm(){
    this.matSrvice.confirm("Are you sure to logout?", 'Confirm?', true).subscribe((result)=>this.message = result);
  }

  enterText(){
    this.matSrvice.enterText('Enter your name').subscribe((result)=>this.message = result); 
  }

  enterNumber(){
    this.matSrvice.enterNumber('Enter your mobile', 6000000000,9999999999).subscribe((result)=>this.message = result); 
  }
}

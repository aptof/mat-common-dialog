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
    this.matSrvice.notify("You are notified for your fault. Be careful next time", 'Careful', 'Yes').subscribe((resutl)=>console.log(resutl));
  }

  confirm(){
    this.matSrvice.confirm("No I am not a hero. Is that right?").subscribe((result)=>console.log(result));
  }
}

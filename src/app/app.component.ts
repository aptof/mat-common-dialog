import { Component } from '@angular/core';
import { AptofMatCommonDialogService, AptofChooseOneOption } from 'mat-common-dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message = 'Result will appear here';

  constructor(private matService: AptofMatCommonDialogService){}

  notify(){
    this.matService.notify("You are notified for your fault. Be careful next time").subscribe((result)=>this.message = result.toString());
  }

  confirm(){
    this.matService.confirm("Are you sure to logout?", 'Confirm?', true).subscribe((result)=>this.message = result.toString());
  }

  enterText(){
    this.matService.enterText('Enter your name', 'John Mallick').subscribe((result)=>this.message = result); 
  }

  enterNumber(){
    this.matService.enterNumber('Enter your mobile', 0, 500, 45).subscribe((result)=>this.message = result.toString()); 
  }

  chooseOne(){
    let options: AptofChooseOneOption[] = [
      {value: 10001, face: '10001 - Anupam Hazra'},
      {value: 10005, face: '10005 - Bikas Prasad'},
      {value: 10007, face: '10007 - Nirmal Mondal'},
    ]
    this.matService.selectOne('Choose employee', options, 10005).subscribe((result)=>this.message = result);
  }
}

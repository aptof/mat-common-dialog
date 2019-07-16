# MatCommonDialog

This library provides two component for MatDialog for **Angular 8** and above, a notification component and a confirm component.

## Screenshots
![Notification](https://raw.githubusercontent.com/aptof/mat-common-dialog/master/images/notification.png)
![Confirmation](https://raw.githubusercontent.com/aptof/mat-common-dialog/master/images/confirm_default.png)


## Requirement

You should use this library if and only if you are using `Angular material component` along with Angular.
 

## Installation

#### For existing angular project.

1. Open terminal or cmd and add angular materila component skip if already added.

>ng add @angular/material
>

2. install this library
>npm i @aptof/mat-common-dialog


#### For non-existing angular projcet
1. Open terminal or cmd and Creat a new Angular project
>ng new example-project

>cd example-project

2. Now follow the steps of `'Existing angular project'`

## Usages

**app.module.ts**
```javascript
...
import { AptofMatCommonDialogModule } from '@aptof/mat-common-dialog';

@NgModule({
  ...
  imports: [
    ...
    AptofMatCommonDialogModule,
  ],
  ...
})
```

**example.component.ts**
```javascript
...
import {AptofMatCommonDialogService} from '@aptof/mat-common-dialog';

@Component({
  ...
})
export class ExampleComponent {
  constructor(private matSrvice: AptofMatCommonDialogService){}

  notifyClick(){
    this.matSrvice.notify("You are notified for your fault. Be careful next time").subscribe((result)=>console.log(result));
  }

  confirmClick(){
    this.matSrvice.confirm("Are you sure to logout?", 'Confirm?').subscribe((result)=>console.log(result));
  }
}
```
>bind **notifyClick** and **confirmClick** with a button. For an example see the [github](https://github.com/aptof/mat-common-dialog) repository.

## API

The **ApotfMatCommonDialogService** exposes two funtions

#### notify
```javascript
notify(message: string, title:string = 'Notification', buttonText:string = 'Ok'): Observable<any>
```
`message: The message of the dialog.`

`title: The title of the dialog.`

`buttonText: The text of the button.`

`return: notify will always return the value of buttonText.`

#### confirm
```javascript
confirm(message: string, title:string = 'Confirm', warnYes:boolean = false):Observable<any>
```
`message: The message of the dialog.`

`title: The title of the dialog.`

`warnYes: By default 'No' button will be warn color but if you provide warnYes to true the 'Yes' button will be warn color.`
![Confirmation_Alternate](https://raw.githubusercontent.com/aptof/mat-common-dialog/master/images/confirm_alternate.png)

>**Note**: In confirm there is no buttonText as it always shows Yes No button.

`return: It will return 'Yes' if you click 'Yes' button and 'No' if you click 'No' button.`
>**Note**: The material dialog can be closed by clicking outside of the dialog in that case `confirm` will return 'No'.

# MatCommonDialog

This library provides common reusable components for MatDialog for **Angular 10** and above.

## Screenshots
![Warning](https://raw.githubusercontent.com/aptof/mat-common-dialog/master/images/warning.png)
![Confirmation](https://raw.githubusercontent.com/aptof/mat-common-dialog/master/images/confirm.png)
![YesNoCancel](https://raw.githubusercontent.com/aptof/mat-common-dialog/master/images/yes_no_cancel.png)
![Enter text](https://raw.githubusercontent.com/aptof/mat-common-dialog/master/images/enter_text.png)
![Enter number](https://raw.githubusercontent.com/aptof/mat-common-dialog/master/images/enter_number.png)
![Select one](https://raw.githubusercontent.com/aptof/mat-common-dialog/master/images/choose_one.png)


## Requirement

You should use this library if and only if you are using `Angular material component` along with Angular.
 

## Installation

#### For existing angular project.

1. Open terminal or cmd and add angular material component skip if already added.

>ng add @angular/material
>

2. install this library
>npm i @aptof/mat-common-dialog


#### For non-existing angular project
1. Open terminal or cmd and Create a new Angular project
>ng new example-project

>cd example-project

2. Now follow the steps of `'Existing angular project'`

## Release Notes


#### V 1.0.0
**Breaking Changes**
1. notify renamed to warn

**Non-breaking changes**
1. Updated to Angular 10
2. Added new dialog = YesNoCancel

#### V 0.2.2
**Breaking Changes**
1. chooseOne renamed to selectOne

**Non-breaking changes**

2. Added preFilledText in enterText
3. Added preFilledNumber in enterNumber
4. Added selectedOption in chooseOne

#### V 0.2.1
1. notify now return only true instead of buttonText
2. confirm now return true or false instead of 'Yes' or 'No'

#### V 0.2.0
1. Added an new component named chooseOne used for selection a option.

#### V 0.1.1
1. Minor bug fixes

#### V 0.1.0
1. Added new component enterText
2. Added new component enterNumber

## Usages

**app.module.ts**
```typescript
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

**app.component.ts**
```typescript
...
import {AptofMatCommonDialogService} from '@aptof/mat-common-dialog';

@Component({
  ...
})
export class ExampleComponent {
  constructor(private dialogService: AptofMatCommonDialogService){}

  warnClicked(){
    this.dialogService.warn("You are notified for your fault. Be careful next time").subscribe((result)=>console.log(result));
  }

  confirmClicked(){
    this.dialogService.confirm("Are you sure to logout?", 'Confirm?').subscribe((result)=>console.log(result));
  }
}
```
**app.component.html**
```html
<div>
  <button mat-button (click)="warnClicked()">Notify</button>
  <button mat-button (click)="confirmClicked()">Confirm</button>
</div>
```

## API

The **AptofMatCommonDialogService** exposes two functions

#### notify
```typescript
warn(
    message: string,
    title:string = 'Notification',
    buttonText:string = 'Ok'
  ): Observable<boolean>
```
`message: The message of the dialog.`

`title: The title of the dialog.`

`buttonText: The text of the button.`

`return: notify will always return true`

#### confirm
```typescript
confirm(
    message: string,
    title:string = 'Confirm',
    warnYes:boolean = false
  ):Observable<boolean>
```
`message: The message of the dialog.`

`title: The title of the dialog.`

`warnYes: By default 'No' button will be warn color but if you provide warnYes to true the 'Yes' button will be warn color.`

>**Note**: In confirm there is no buttonText as it always shows Yes and No button.

`return: It will return true if you click 'Yes' button and false if you click 'No' button.`
>**Note**: The material dialog can be closed by clicking outside of the dialog in that case `confirm` will return false.


#### yesNoCancel
```typescript
yesNoCancel(
    message: string,
    title: string = 'Save',
    warnYes: boolean = false
  ): Observable<string>
```


#### enterText
```typescript
enterText(
    title:string = "Enter text",
    preFilledText: string = ''
  ):Observable<string>
```

#### enterNumber
```typescript
enterNumber(
    title:string = "Enter number",
    min:number = null,
    max:number = null,
    preFilledNumber: number = null
  ):Observable<number>
```

#### chooseOne
```typescript
selectOne(
    title:string = 'Select One',
    options: AptofChooseOneOption[] = [],
    selectedValue:any = ''
  ):Observable<any>

interface AptofChooseOneOption {
  value: any;  //this will be returned
  face: string; // this will be shown
}
```
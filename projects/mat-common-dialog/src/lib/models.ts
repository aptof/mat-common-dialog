export const APTOF_WIDTH = '350px';

export interface AptofWarnData {
  message: string;
  title: string;
  buttonText: string
}

export interface AptofConfirmData{
  message: string;
  title: string;
  warnYes: boolean;
}
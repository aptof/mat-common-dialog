import { AptofSelectOneOption } from './public-models';

export const APTOF_WIDTH = '350px';

export interface AptofWarnData {
  message: string;
  title: string;
  buttonText: string;
}

export interface AptofConfirmData {
  message: string;
  title: string;
  warnYes: boolean;
}

export interface AptofNumberData {
  title: string;
  min: number;
  max: number;
  preFilledNumber: number;
}

export interface AptofTextData {
  title: string;
  preFilledText: string;
}

export interface AptofSelectOneData {
  title: string;
  options: AptofSelectOneOption[];
  selectedValue: AptofSelectOneOption;
}

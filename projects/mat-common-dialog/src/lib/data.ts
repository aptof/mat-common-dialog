import { AptofChooseOneOption } from './public-data';

export interface AptofNotifyData {
    message: string;
    title: string;
    buttonText: string
};

export interface AptofConfirmData{
    message: string;
    title: string;
    warnYes: boolean;
}

export interface AptofTextData{
    title: string;
    prefilledText: string;
}

export interface AptofNumberData{
	title: string;
	min: number;
    max: number;
    prefilledNumber:number;
}

export interface AptofChooseOneData{
    title: string;
    options: AptofChooseOneOption[];
    selectedOption: AptofChooseOneOption;
}

export const APTOF_WIDTH = '350px';
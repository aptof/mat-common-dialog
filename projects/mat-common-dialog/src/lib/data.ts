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

export interface AptofNumberData{
	title: string;
	min: number;
	max: number;
}

export interface AptofChooseOneData{
    title: string;
    options: AptofChooseOneOption[];
}

export const APTOF_WIDTH = '350px';
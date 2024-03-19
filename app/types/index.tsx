export type QuotesType = '"' | "'";
export type AlertType = 'error' | 'success' | 'warning';
export type MeasurementType = 'px' | '%' | 'em' | 'rem' | 'vw';

export interface SettingsInterface {
    modes:any,
    currentMode:string,
    onModeChange:(str:string) => void,
    currentQuotes: QuotesType,
    onQuotesChange:(str:QuotesType) => void,
    dimensions:Array<number>,
    onDimensionsChange:(arr:Array<number>) => void,
    measurement:MeasurementType,
    measurementOptions:Array<MeasurementType>,
    onMeasurementChange:(str:MeasurementType) => void,
}

export interface TextAreaProps {
    label:string,
    value:string,
    onInputChange?:(data: string) => void,
    disabled?:boolean,
    placeholder:string
}

export interface ColourToggleInterface {
    options:Array<ColourInterface>,
    callback:Function,
}

export interface ColourInterface {
    label:string,
    colour:string
}

export interface TitleInterface {
    title:string,
    classes?:string
    children?:any
}

export interface AlertInterface {
    type?: AlertType,
    show: boolean,
    message:string,
    onClose?:Function
}
export type QuotesType = '"' | "'";
export type AlertType = 'error' | 'success' | 'warning';

export interface SettingsInterface {
    modes:any,
    currentMode:string,
    onModeChange:Function,
    currentQuotes: QuotesType,
    onQuotesChange:Function
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
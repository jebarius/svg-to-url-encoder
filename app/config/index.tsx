const BUTTON_STYLE = 'inline-block border-2 border-red-500 px-4 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:text-neutral-100  focus:outline-none focus:ring-0 motion-reduce:transition-none hover:bg-red-500';
const ACTIVE_BUTTON_STYLE = ' bg-red-500 text-xs font-medium uppercase leading-normal text-neutral-100 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2  focus:outline-none focus:ring-0  motion-reduce:transition-none shadow-black/30 hover:shadow-dark-strong';

interface AlertConfig {message:string, type:'error' | 'success' | 'warning'}
const ALERT_SUCCESS_CONFIG:AlertConfig = {
    message:'CSS copied to clipboard',
    type:'success'
};

const ALERT_FAIL_CONFIG:AlertConfig = {
    message:'CSS failed to copy clipboard',
    type:'error'
};

const ALERT_TIMEOUT = 4000;

export {
    BUTTON_STYLE,
    ACTIVE_BUTTON_STYLE,
    ALERT_SUCCESS_CONFIG,
    ALERT_FAIL_CONFIG,
    ALERT_TIMEOUT
}
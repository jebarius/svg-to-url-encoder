import {useState} from "react"
import { BUTTON_STYLE, ACTIVE_BUTTON_STYLE } from "../config"
import { ExampleButtonsInterface } from "../types";

const ExampleButtons = ({options, callback}:ExampleButtonsInterface) => {
    const buttonStyles = BUTTON_STYLE;
    const activeButtonStyles = ACTIVE_BUTTON_STYLE;
  
    return (
        <div className="button-group">
            {options.map((option, index) => {
                const isFirst = index === 0;
                const isLast = index === options.length - 1;
                const buttonClass = `${buttonStyles} ${isFirst ? 'rounded-l-md border-r-0' : ''} ${isLast ? 'rounded-r-md border-l-0' : ''}`;

                return (
                    <button
                        key={index+option.label}
                        className={buttonClass}
                        onClick={(e:any) => {
                            e.preventDefault();
                            console.log(option.icon)
                            callback(option.icon);
                        }}
                    >
                        
                        <div className="icon-area" dangerouslySetInnerHTML={{ __html: option.icon }} style={{width:30, height:30}} />
                       
                    </button>
                );
            })}
        </div>
    );
}

export default ExampleButtons;
import {useState} from "react"
import { BUTTON_STYLE, ACTIVE_BUTTON_STYLE } from "../config"
import { ColourToggleInterface } from "../types";

const ColourToggle = ({options, callback}:ColourToggleInterface) => {
    const [bgColour, setBgColour] = useState('bg-gray-700');
    const buttonStyles = BUTTON_STYLE;
    const activeButtonStyles = ACTIVE_BUTTON_STYLE;
  
    return (
        <div className="button-group">
            {options.map((option, index) => {
                const isFirst = index === 0;
                const isLast = index === options.length - 1;
                const buttonClass = `${buttonStyles} ${bgColour === option.colour ? activeButtonStyles : ''} ${isFirst ? 'rounded-l-md border-r-0' : ''} ${isLast ? 'rounded-r-md border-l-0' : ''}`;

                return (
                    <button
                        key={index}
                        className={buttonClass}
                        onClick={(e:any) => {
                            e.preventDefault();
                            setBgColour(option.colour);
                            callback(option.colour);
                        }}
                    >
                        {option.label}
                    </button>
                );
            })}
        </div>
    );
}

export default ColourToggle;
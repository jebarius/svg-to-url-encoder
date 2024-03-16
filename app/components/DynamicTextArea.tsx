'use client';
import React, { useEffect, useState } from "react";

interface TextAreaProps {
    label:string,
    value:string,
    onInputChange?:(data: string) => void,
    disabled?:boolean,
    placeholder:string
}

const DynamicTextArea = ({label, value, onInputChange, disabled = false, placeholder}:TextAreaProps) => {
    const [textValue, setTextValue] = useState(value);

    const stringToSlug =(input: string): string => {
        return input
            .toLowerCase() // Convert to lowercase
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/[^\w\-]+/g, '') // Remove non-word characters except hyphens
            .replace(/\-\-+/g, '-') // Replace multiple hyphens with single hyphen
            .replace(/^-+/, '') // Trim hyphens from start of string
            .replace(/-+$/, ''); // Trim hyphens from end of string
    }


    useEffect(() => {
        console.log(label,value)
        setTextValue(value);
    }, [value])
    return (
        <>
        
           
        {/* <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label> */}
        <textarea 

            rows="6" 
            key={stringToSlug(label)}
            onChange={(e:any) => {
                if(onInputChange) 
                    onInputChange(e.target.value)
            }} 
            className="block h-56 p-2.5 w-full text-sm text-gray-900 bg-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-0  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
            placeholder={placeholder}
            disabled={disabled}
            defaultValue={textValue}
            >
            </textarea>

        </>
    )
}

export default DynamicTextArea;
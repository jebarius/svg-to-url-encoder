import { MeasurementType, QuotesType } from "../types";

const PseudoElement = (url:string, dimensions:Array<number>, measurement:MeasurementType, quotes:QuotesType) => {
    //flip the quotes to ensure it doesn't break the css
    let svgstr:string;
    if(quotes == "'"){
        svgstr = url.replace(/["']/g, '"');
    }else{
        svgstr = url.replace(/["']/g, "'");
    }
    

    return `.element::before{
        content:${quotes}${quotes};
        width:${dimensions[0]}${measurement};
        height:${dimensions[1]}${measurement};
        background-image:url(${quotes}${svgstr}${quotes});
    }`;
};

export default PseudoElement;
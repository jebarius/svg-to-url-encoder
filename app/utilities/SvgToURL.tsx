import { QuotesType } from "../types";

const SvgToBackgroundImageUrl = (svg:string, quotes:QuotesType) => {
    const svgstr = svg.replace(/["']/g, quotes);

    return `data:image/svg+xml;base64,${btoa(svgstr)}`;
};

export default SvgToBackgroundImageUrl;

const encodeSVG = (svgString: string, targetQuote: string): string => {
    const replacedSvgString = svgString.replace(/["']/g, targetQuote);
    const urlEncodedSvg = encodeURIComponent(replacedSvgString);
    return urlEncodedSvg;
}

export default encodeSVG;

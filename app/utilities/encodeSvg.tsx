const encodeSVG = (svgString: string): string => {
    const urlEncodedSvg = encodeURIComponent(svgString);
    return urlEncodedSvg;
}

export default encodeSVG;
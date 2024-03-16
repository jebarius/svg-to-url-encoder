const SvgToBackgroundImageUrl = (svg:string) => {
    return `data:image/svg+xml;base64,${btoa(svg)}`;
};

export default SvgToBackgroundImageUrl;

interface PreviewCanvasInterface {
    bgColour:string,
    url:string,
    mode:string
}

const PreviewCanvas = ({url, mode, bgColour}:PreviewCanvasInterface) => {
    return (
        <>
            {mode == 'list' ? (
                <div className={`w-full px-4 py-2 rounded-lg ${bgColour} mt-4`}>
                    <div style={{backgroundImage:'url('+url+')'}} className={`w-full h-56 bg-contain bg-no-repeat bg-center ${bgColour}`}></div>
                </div>
            ) : (
                <div className={`w-full px-4 py-2 rounded-lg ${bgColour} mt-4`}>
                    <div style={{backgroundImage:'url('+url+')'}} className={`w-full h-56 bg-contain bg-no-repeat bg-center ${bgColour}`}></div>
                </div>
            )}
        </>
        
    )
};

export default PreviewCanvas;
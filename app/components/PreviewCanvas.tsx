import { PreviewCanvasInterface } from '../types';

const PreviewCanvas = ({url, mode, bgColour, dimensions, measurement}:PreviewCanvasInterface) => {

    const listItemStyle = {
        listStyle: 'none',
        position: 'relative',
    } as React.CSSProperties;

    const bulletStyle = {
        position: 'relative',
        display:'inline-block',
        left:0,
        height: dimensions[1]+measurement, // Adjust as needed
        width: dimensions[0]+measurement, // Adjust as needed
        backgroundImage: `url(${url})`,
        backgroundSize: 'contain',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat'
    } as React.CSSProperties;


    return (
        <>
            {mode == 'list' ? (
                <div className={`w-full px-4 py-2 rounded-lg ${bgColour} mt-4`}>
                    <div className={`w-full h-56 bg-contain bg-no-repeat bg-center ${bgColour}`}></div>

                    <ul className={``}>
                        <li style={listItemStyle}>
                            <div style={bulletStyle}></div>
                            List item
                        </li>
                        {/* Add more list items here if needed */}
                    </ul>


                    {/* create list items that use the background image as the list item bullet */}
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
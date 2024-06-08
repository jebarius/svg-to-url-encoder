'use client';
import React, {useEffect, useState} from "react";
import Image from "next/image";
import styles from "./page.module.css";
import DynamicTextArea from "./components/DynamicTextArea";
import SvgToBackgroundImageUrl from "./utilities/SvgToURL";
import ColourToggle from "./components/ColourToggle";
import Title from "./components/Title";
import { BUTTON_STYLE, ALERT_SUCCESS_CONFIG, ALERT_FAIL_CONFIG, ALERT_TIMEOUT } from "./config";
import Toast from "./components/Toast";
import encodeSVG from "./utilities/encodeSvg";
import SettingsBar from "./components/SettingsBar";
import { QuotesType, MeasurementType } from "./types";
import PreviewCanvas from "./components/PreviewCanvas";
import PseudoElement from "./utilities/PseudoElement";
import { ICON_CHECKMARK, ICON_CLOSE, ICON_HEART, ICON_PINEAPPLE, ICON_STAR} from './config/icons'
import ExampleButtons from "./components/ExampleButtons";

const MODES = {
  background:'Background Image',
  pseudo:'Pseudo Element',
  //list:'List Item'
};

const MEASUREMENTS:Array<MeasurementType> = [
  'px', '%', 'em', 'rem', 'vw'
];

const Home = () => {
  const [input, setInput] = useState('');
  const [outputCode, setOutputCode] = useState('');
  const [previewUrl, setPreviewURL] = useState('');
  const [encoded, setEncoded] = useState('');
  const [quotes, setQuotes] = useState<QuotesType>('"');
  const [bgColour, setBgColour] = useState('bg-gray-700');
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState(ALERT_SUCCESS_CONFIG);
  const [generateMode, setGenerateMode] = useState('background');
  const [dimensions, setDimensions] = useState<Array<number>>([100,100]);
  const [measurement, setMeasurement] = useState<MeasurementType>('px');

  const textAreaCallback = (str:string) => {
    let enc = SvgToBackgroundImageUrl(str, quotes);
    setInput(str);
    setEncoded(encodeSVG(str, quotes));
    setPreviewURL(enc);

    if(generateMode == 'background'){
      setOutputCode(`background-image:url(${quotes}${enc}${quotes});`);
    }else{
      setOutputCode(PseudoElement(str, dimensions, measurement, quotes));
    }
    
  } 

  const CopyToClipboardButton = (text:string) => {
      navigator.clipboard.writeText(text)
        .then(() => {
          console.log('Text copied to clipboard:', text);
          setAlert(ALERT_SUCCESS_CONFIG);
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          },ALERT_TIMEOUT)
        })
        .catch((err) => {
          console.error('Failed to copy text to clipboard:', err);
          setAlert(ALERT_FAIL_CONFIG);
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          },ALERT_TIMEOUT)
        });
    };
  
    useEffect(() => {
      if(input.length > 0){
        console.log('refresh');
        textAreaCallback(input)
      }
      
    }, [generateMode, dimensions, measurement, quotes]);
  return (
    <main className={styles.main}>
     <Toast 
        show={showAlert}
        type={alert.type}
        message={alert.message}
        onClose={() => {
          setShowAlert(false)
        }}
      />
      <div className={`w-full max-w-[860px] mx-xs mx-auto pb-6`}>
      <div className="fade-in-up flex flex-col md:flex-row justify-between items-center">
          <a
            href="#"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo.svg"
              alt=""
              width={200}
              height={100}
              priority
              className="mb-2"
            />


          </a>

          <nav className="flex py-2 lg:py-0 md:py-0">
            
            <a href="#about" className="mr-4 fade-in-up hover:text-red-500 transition hover:ease-in" style={{animationDelay:'1s'}}>About</a>
            <a href="https://github.com/jebarius/svg-to-url-encoder" className="mr-4 fade-in-up hover:text-red-500 transition hover:ease-in" style={{animationDelay:'1.1s'}} target="_blank">View on Github</a>
            <a href="https://jebari.us" className="mr-4 fade-in-up hover:text-red-500 transition hover:ease-in" style={{animationDelay:'1.2s'}} target="_blank">Other Work</a>
            <a href="https://www.linkedin.com/in/jebarius/" className="mr-4 fade-in-up hover:text-red-500 transition hover:ease-in" style={{animationDelay:'1.3s'}} target="_blank">Contact</a>
          </nav>
      </div>

      <div className="flex flex-col md:flex-row w-full my-4">
        <div className="flex-grow w-full md:w-2/3 pr-0 md:pr-4 mb-4 md:mb-0">
          <div className="rounded-md bg-gray-600 p-4 fade-in-up" style={{ animationDelay: '.25s' }}>
            <Title title="SVG to CSS Converter" classes="mb-3 mt-1" />
            <p>This utility transforms SVG code into a Data URI, which is a URL format encoded for direct usage as a background-image source. Put simply, you can insert this converted SVG code directly into CSS, eliminating the necessity of uploading image files and reducing server requests.</p>
          </div>
          <div className="rounded-md bg-gray-600 mt-4 p-4 fade-in-up" style={{ animationDelay: '.35s' }}>
          <Title title="Examples" classes="mb-2 mt-1">
          <ExampleButtons options={[
                  {label:'Checkmark', icon:ICON_CHECKMARK},
                  {label:'Close', icon:ICON_CLOSE},
                  {label:'Star', icon:ICON_STAR},
                  {label:'Heart', icon:ICON_HEART},
                  {label:'Pineapple', icon:ICON_PINEAPPLE},
                ]}
                callback={(str:string) => {
                  textAreaCallback(str);
                }}
              />
            </Title>
          
          
          
          </div>
        </div>
        <div className="flex-grow w-full md:w-1/3">
          <div className="h-full rounded-md bg-gray-600 p-4 fade-in-up" style={{ animationDelay: '.45s' }}>
            
            <SettingsBar
              modes={MODES}
              currentMode={generateMode}
              currentQuotes={quotes}
              dimensions={dimensions}
              measurementOptions={MEASUREMENTS}
              measurement={measurement}
              onModeChange={(str: string) => setGenerateMode(str)}
              onQuotesChange={(str: QuotesType) => setQuotes(str)}
              onDimensionsChange={(arr:Array<number>) => setDimensions(arr)}
              onMeasurementChange={(str:MeasurementType) => setMeasurement(str)}
            />

          </div>
        </div>
      </div>



      

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        
        <div className="rounded-md bg-gray-600 p-4 fade-in-up" style={{animationDelay:'.65s'}}>
          <Title title="Your SVG" classes="mb-3 mt-1"/>
          <DynamicTextArea placeholder="<svg ..." key={'dynamic-text-input'} label="Your Input" value={input} onInputChange={textAreaCallback}/>
        </div>
        <div className="rounded-md bg-gray-600 p-4 fade-in-up" style={{animationDelay:'.75s'}}>
          <Title title="Encoded SVG" classes="mb-4 mt-1">
            <button 
            className={BUTTON_STYLE + ' rounded-md self-start'}
            onClick={(e:any) =>{
              CopyToClipboardButton(encoded)
            } }
            >
              Copy to clipboard
            </button>
          </Title>
          <DynamicTextArea placeholder="" key={'dynamic-text-encoded'} label="Your Encoded Input" value={encoded} disabled={true}/>
        </div>
        <div className="rounded-md bg-gray-600 p-4 fade-in-up" style={{animationDelay:'.85s'}}>
          <Title title="CSS Ready Code" classes="mb-4 mt-1">
            <button 
            className={BUTTON_STYLE + ' rounded-md self-start'}
            onClick={(e:any) =>{
              CopyToClipboardButton(outputCode)
            }}
            >
              Copy to clipboard
            </button>
          </Title>
          <DynamicTextArea placeholder="background-image:url(...." key={'dynamic-text-css-url'} label="URL" value={outputCode.length > 0 ? outputCode : ''} disabled={true}/>
        </div>
        <div className="rounded-md bg-gray-600 p-4 fade-in-up" style={{animationDelay:'.95s'}}>
            <Title title="Preview" classes="mt-2" >
              <ColourToggle options={[
                  {label:'transparent', colour:'bg-gray-700'},
                  {label:'black', colour:'bg-zinc-950'},
                  {label:'white', colour:'bg-neutral-100'},
                ]}
                callback={(str:string) => {
                  setBgColour(str);
                }}
              />
            </Title>
            
            <PreviewCanvas 
              mode={generateMode} 
              bgColour={bgColour} 
              url={previewUrl} 
              dimensions={dimensions} 
              measurement={measurement} 
            />
          </div>  
        </div>

        <div className="rounded-md bg-gray-600 p-4 fade-in-up w-full my-4" style={{animationDelay:'1.05s'}} id="about">
          <Title title="About The tool" classes="mb-3 mt-1"/>
          <p>This was tool was developed one weekend so I had a consistent way of converting svgs to css background images 
            easily. The tool is built using React, NextJS, Typescript and Tailwind.</p>
        </div>
        <div className="fade-in-up w-full mt-10 py-3" style={{animationDelay:'1.15s'}}>
        <a
            href="https://jebari.us"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/jeb.svg"
              alt=""
              width={60}
              height={100}
              priority
              className="mx-auto my-6"
            />

          </a>
        </div>
      </div>
      
    </main>
  );
}


export default Home;

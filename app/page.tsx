'use client';
import React, {useState} from "react";
import Image from "next/image";
import styles from "./page.module.css";
import DynamicTextArea from "./components/DynamicTextArea";
import SvgToBackgroundImageUrl from "./utilities/SvgToURL";
import ColourToggle from "./components/ColourToggle";
import Title from "./components/Title";
import { BUTTON_STYLE, ALERT_SUCCESS_CONFIG, ALERT_FAIL_CONFIG, ALERT_TIMEOUT } from "./config";
import Toast from "./components/Toast";



const Home = () => {
  const [input, setInput] = useState('');
  const [url, setURL] = useState('');
  const [quotes, setQuotes] = useState('"');
  const [bgColour, setBgColour] = useState('bg-gray-700');
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState(ALERT_SUCCESS_CONFIG);

  const textAreaCallback = (str:string) => {
    setInput(str);
    setURL(SvgToBackgroundImageUrl(str));
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
  
  return (
    <main className={styles.main}>
      <div className={`container mx-sm mx-auto`}>
        <div>
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
              className="mb-5"
            />
          </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-md bg-gray-600 p-4">
          <Title title="Your SVG" classes="mb-3 mt-1"/>
          <DynamicTextArea placeholder="<svg ..." key={'dynamic-text-input'} label="Your Input" value="" onInputChange={textAreaCallback}/>
        </div>
        <div className="rounded-md bg-gray-600 p-4">
          <Title title="Encoded SVG" classes="mb-3 mt-1"/>
          <DynamicTextArea placeholder="" key={'dynamic-text-encoded'} label="Your Encoded Input" value={input} disabled={true}/>
        </div>
        <div className="rounded-md bg-gray-600 p-4">
          <Title title="CSS Ready Code" classes="mb-4 mt-1" children={
            <button 
            className={BUTTON_STYLE + ' rounded-md self-start'}
            onClick={(e:any) =>{
              CopyToClipboardButton(`background-image:url(${quotes}${url}${quotes})`)
            } }
            >
              Copy to clipboard
            </button>
          }/>
          <DynamicTextArea placeholder="background-image:url(...." key={'dynamic-text-css-url'} label="URL" value={url.length > 0 ? `background-image:url(${quotes}${url}${quotes})` : ''} disabled={true}/>
        </div>
        <div className="rounded-md bg-gray-600 p-4">

          <Title title="Preview" classes="mt-2" children={<ColourToggle options={[
                {label:'transparent', colour:'bg-gray-700'},
                {label:'black', colour:'bg-zinc-950'},
                {label:'white', colour:'bg-neutral-100'},
              ]}
              callback={(str:string) => {
                setBgColour(str);
              }}
            />}/>
            
          
        
          <div className={`w-full px-4 py-2 rounded-lg ${bgColour} mt-4`}>
            <div style={{backgroundImage:'url('+url+')'}} className={`w-full h-56 bg-contain bg-no-repeat bg-center ${bgColour}`}></div>
          </div>
        </div>

        
      </div>
      </div>
      <Toast 
        show={showAlert}
        type={alert.type}
        message={alert.message}
        onClose={() => {
          setShowAlert(false)
        }}
      />
    </main>
  );
}


export default Home;
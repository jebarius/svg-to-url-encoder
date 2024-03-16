'use client';
import React, {useState} from "react";
import Image from "next/image";
import styles from "./page.module.css";
import DynamicTextArea from "./components/DynamicTextArea";
import SvgToBackgroundImageUrl from "./utilities/SvgToURL";
import ColourToggle from "./components/ColourToggle";
import Title from "./components/Title";
import { BUTTON_STYLE } from "./config";
const Home = () => {
  const [input, setInput] = useState('');
  const [url, setURL] = useState('');
  const [quotes, setQuotes] = useState('"');
  const [bgColour, setBgColour] = useState('bg-gray-700');

  const textAreaCallback = (str:string) => {
    setInput(str);
    setURL(SvgToBackgroundImageUrl(str));
  } 

  const CopyToClipboardButton = (text:string) => {
      navigator.clipboard.writeText(text)
        .then(() => {
          console.log('Text copied to clipboard:', text);
          // Optionally, you can show a success message to the user here
        })
        .catch((err) => {
          console.error('Failed to copy text to clipboard:', err);
          // Optionally, you can show an error message to the user here
        });
    };
  
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/jeb.svg"
              alt=""
              width={100}
              height={100}
              priority
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
    </main>
  );
}


export default Home;
'use client';
import React, {useState} from "react";
import Image from "next/image";
import styles from "./page.module.css";
import DynamicTextArea from "./components/DynamicTextArea";

const Home = () => {
  const [input, setInput] = useState('');

  const textAreaCallback = (str:string) => {
    setInput(str);
  } 
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
        <div className="bg-gray-200 p-4">
          <DynamicTextArea key={'dynamic-text-input'} label="Your Input" value="" onInputChange={textAreaCallback}/>
        </div>
        <div className="bg-gray-200 p-4">
          <DynamicTextArea key={'dynamic-text-encoded'} label="Your Encoded Input" value={input} disabled={true}/>
          
        </div>
        <div className="bg-gray-200 p-4">{input}</div>
        <div className="bg-gray-200 p-4">{input}</div>
      </div>
    </main>
  );
}


export default Home;
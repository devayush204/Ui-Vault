"use client"
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy } from 'lucide-react';

const PopupWithActions = () => {

  const customCodeStyle = {
    backgroundColor: '#011627',
    borderRadius: '0.5rem',
    padding: '6px',
    fontSize: '16px',
    lineHeight: '1.5',
    position: 'relative',
  };

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {

    const textToCopy = code.trim();
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);

    try {
      textarea.select();
      document.execCommand('copy');
      console.log('Code copied to clipboard!');
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    } finally {
      document.body.removeChild(textarea);
    }
  };



  const code = `
    <div role="alert" class="rounded-xl border border-gray-100 bg-white p-4">
    <div class="flex items-start gap-4">
      <span class="text-green-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
  
      <div class="flex-1">
        <strong class="block font-medium text-gray-900"> Changes saved </strong>
  
        <p class="mt-1 text-sm text-gray-700">Your product changes have been saved.</p>
  
        <div class="mt-4 flex gap-2">
          <a
            href="#"
            class="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
          >
            <span class="text-sm"> Preview </span>
  
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
  
          <button class="block rounded-lg px-4 py-2 text-gray-700 transition hover:bg-gray-50">
            <span class="text-sm">Revert</span>
          </button>
        </div>
      </div>
  
      <button class="text-gray-500 transition hover:text-gray-600">
        <span class="sr-only">Dismiss popup</span>
  
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
    `;



  const [isVisible, setisVisible] = useState(false)

  return (
    <div className="mt-4">
      <div>
        <h1 className='text-xl font-semibold'># Alert with Actions</h1>
        <div className={`w-full  rounded-lg border border-black mt-6 overflow-hidden relative 
                ${isVisible && "overflow-y-auto"} `}>
          <div className='p-4'>
            <div className='' dangerouslySetInnerHTML={{ __html: code }} />
          </div>
          <h2 className="text-lg font-semibold my-2 pl-4">Code</h2>
          <div style={customCodeStyle} className={`${isVisible ? "h-full transition-all 300ms ease-linear" : "max-h-[200px] transition-all 300ms ease-linear"}`}>
            <SyntaxHighlighter language="jsx" style={nightOwl} showLineNumbers wrapLongLines>
              {code.trim()}
            </SyntaxHighlighter>
            <button


              className="copy-button absolute top-2 right-4 bg-blue-500 text-white p-2 rounded-md cursor-pointer text-sm"
              onClick={handleCopy}
            >
              {isCopied ? "Copied" : <Copy className='h-5 w-5 text-gray-100' />}
            </button>
          </div>
          <div className='absolute bottom-3 w-fit px-4 right-0' onClick={() => setisVisible(!isVisible)}>
            <button className='w-full text-center bg-gray-400 p-2 rounded-md hover:bg-gray-300 text-sm border border-gray-200'>{isVisible ? "Close" : "Extend code"}</button>
          </div>
        </div>
      </div>



    </div>
  );
};

export default PopupWithActions;



"use client"
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy } from 'lucide-react';

const PopupDismissing = () => {

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
    
<div id="alert-1" class="flex items-center p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 " role="alert">
<svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
</svg>
<span class="sr-only">Info</span>
<div class="ms-3 text-sm font-medium">
  A simple info alert with an <a href="#" class="font-semibold underline hover:no-underline">example link</a>. Give it a click if you like.
</div>
  <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#alert-1" aria-label="Close">
    <span class="sr-only">Close</span>
    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
    </svg>
</button>
</div>
<div id="alert-2" class="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50" role="alert">
<svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
</svg>
<span class="sr-only">Info</span>
<div class="ms-3 text-sm font-medium">
  A simple info alert with an <a href="#" class="font-semibold underline hover:no-underline">example link</a>. Give it a click if you like.
</div>
<button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 " data-dismiss-target="#alert-2" aria-label="Close">
  <span class="sr-only">Close</span>
  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
  </svg>
</button>
</div>
<div id="alert-3" class="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 " role="alert">
<svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
</svg>
<span class="sr-only">Info</span>
<div class="ms-3 text-sm font-medium">
  A simple info alert with an <a href="#" class="font-semibold underline hover:no-underline">example link</a>. Give it a click if you like.
</div>
<button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 " data-dismiss-target="#alert-3" aria-label="Close">
  <span class="sr-only">Close</span>
  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
  </svg>
</button>
</div>
<div id="alert-4" class="flex items-center p-4 mb-4 text-yellow-800 rounded-lg bg-yellow-50 " role="alert">
<svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
</svg>
<span class="sr-only">Info</span>
<div class="ms-3 text-sm font-medium">
  A simple info alert with an <a href="#" class="font-semibold underline hover:no-underline">example link</a>. Give it a click if you like.
</div>
<button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-yellow-50 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex items-center justify-center h-8 w-8 " data-dismiss-target="#alert-4" aria-label="Close">
  <span class="sr-only">Close</span>
  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
  </svg>
</button>
</div>
<div id="alert-5" class="flex items-center p-4 rounded-lg bg-gray-50 " role="alert">
<svg class="flex-shrink-0 w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
</svg>
<span class="sr-only">Info</span>
<div class="ms-3 text-sm font-medium text-gray-800 ">
  A simple dark alert with an <a href="#" class="font-semibold underline hover:no-underline">example link</a>. Give it a click if you like.
</div>
<button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-gray-50 text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 p-1.5 hover:bg-gray-200 inline-flex items-center justify-center h-8 w-8 " data-dismiss-target="#alert-5" aria-label="Close">
  <span class="sr-only">Dismiss</span>
  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
  </svg>
</button>
</div>

     `;



    const [isVisible, setisVisible] = useState(false)

    return (
        <div className="mt-4">
            <div>
                <h1 className='text-xl font-semibold'># Alert Dismissing</h1>
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

export default PopupDismissing;



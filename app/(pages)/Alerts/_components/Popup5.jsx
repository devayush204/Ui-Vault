"use client"
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy } from 'lucide-react';

const PopupWithIcons = () => {

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
    
<div class="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50" role="alert">
<svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
</svg>
<span class="sr-only">Info</span>
<div>
  <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
</div>
</div>
<div class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
<svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
</svg>
<span class="sr-only">Info</span>
<div>
  <span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
</div>
</div>
<div class="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
<svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
</svg>
<span class="sr-only">Info</span>
<div>
  <span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
</div>
</div>
<div class="flex items-center p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 " role="alert">
<svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
</svg>
<span class="sr-only">Info</span>
<div>
  <span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.
</div>
</div>
<div class="flex items-center p-4 text-sm text-gray-800 rounded-lg bg-gray-50" role="alert">
<svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
</svg>
<span class="sr-only">Info</span>
<div>
  <span class="font-medium">Dark alert!</span> Change a few things up and try submitting again.
</div>
</div>
`;



    const [isVisible, setisVisible] = useState(false)

    return (
        <div className="mt-4">
            <div>
                <h1 className='text-xl font-semibold'># Alerts with icon </h1>
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

export default PopupWithIcons;



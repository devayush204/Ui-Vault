"use client"
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy } from 'lucide-react';

const Badge10 = () => {

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
       
    
<button type="button" class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
</svg>
<span class="sr-only">Notifications</span>
  <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 ">20</div>
</button>

    `;



    const [isVisible, setisVisible] = useState(false)

    return (
        <div className="mt-4">
            <div>
                <h1 className='text-xl font-semibold'># Notification badge</h1>
                <div className={`w-full  rounded-lg border border-black mt-6 overflow-hidden relative 
                ${isVisible && "overflow-y-auto"} `}>
                    <div className='p-4 '>
                        <div className='flex justify-center' dangerouslySetInnerHTML={{ __html: code }} />
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

export default Badge10;



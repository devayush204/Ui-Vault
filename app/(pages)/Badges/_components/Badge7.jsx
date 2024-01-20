"use client"
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy } from 'lucide-react';

const Badge7 = () => {

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
   
<span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded ">Default</span>
<span class="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded ">Dark</span>
<span class="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Red</span>
<span class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded ">Green</span>
<span class="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded ">Yellow</span>
<span class="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded ">Indigo</span>
<span class="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded ">Purple</span>
<span class="bg-pink-100 text-pink-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded ">Pink</span>

    `;



    const [isVisible, setisVisible] = useState(false)

    return (
        <div className="mt-4">
            <div>
                <h1 className='text-xl font-semibold'># Large badges</h1>
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

export default Badge7;



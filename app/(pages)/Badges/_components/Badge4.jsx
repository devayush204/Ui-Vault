"use client"
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy } from 'lucide-react';

const Badge4 = () => {

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
    <!-- Success -->
<span
  class="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="-ms-1 me-1.5 h-4 w-4"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>

  <p class="whitespace-nowrap text-sm">Paid</p>
</span>

<!-- Warning -->
<span
  class="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="-ms-1 me-1.5 h-4 w-4"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z"
    />
  </svg>

  <p class="whitespace-nowrap text-sm">Refunded</p>
</span>

<!-- Error -->
<span
  class="inline-flex items-center justify-center rounded-full bg-red-100 px-2.5 py-0.5 text-red-700"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="-ms-1 me-1.5 h-4 w-4"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
    />
  </svg>

  <p class="whitespace-nowrap text-sm">Failed</p>
</span>
    `;



  const [isVisible, setisVisible] = useState(false)

  return (
    <div className="mt-4">
      <div>
        <h1 className='text-xl font-semibold'># Themed</h1>
        <div className={`w-full  rounded-lg border border-black mt-6 overflow-hidden relative 
                ${isVisible && "overflow-y-auto"} `}>
          <div className='p-4 '>
            <div className='flex justify-center gap-3' dangerouslySetInnerHTML={{ __html: code }} />
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

export default Badge4;



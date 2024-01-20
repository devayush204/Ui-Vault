'use client'
import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Copy } from 'lucide-react'

const Badge2 = () => {
    const customCodeStyle = {
        backgroundColor: '#011627',
        borderRadius: '0.5rem',
        padding: '6px',
        fontSize: '16px',
        lineHeight: '1.5',
        position: 'relative',
    }

    const [isCopied, setIsCopied] = useState(false)

    const handleCopy = () => {
        const textToCopy = code.trim()
        const textarea = document.createElement('textarea')
        textarea.value = textToCopy
        textarea.style.position = 'fixed'
        document.body.appendChild(textarea)

        try {
            textarea.select()
            document.execCommand('copy')
            console.log('Code copied to clipboard!')
            setIsCopied(true)
            setTimeout(() => {
                setIsCopied(false)
            }, 3000)
        } catch (error) {
            console.error('Error copying to clipboard:', error)
        } finally {
            document.body.removeChild(textarea)
        }
    }

    const code = ` 
    <span
  class="inline-flex items-center justify-center rounded-full bg-purple-100 px-2.5 py-0.5 text-purple-700"
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
      d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>

  <p class="whitespace-nowrap text-sm">Euro</p>
</span>
    `

    const [isVisible, setisVisible] = useState(false)

    return (
        <div className='mt-4'>
            <div>
                <h1 className='text-xl font-semibold'># Simple with Icon</h1>
                <div
                    className={`w-full  rounded-lg border border-black mt-6 overflow-hidden relative 
                ${isVisible && 'overflow-y-auto'} `}
                >
                    <div className='p-4 '>
                        <div
                            className='flex justify-center'
                            dangerouslySetInnerHTML={{ __html: code }}
                        />
                    </div>
                    <h2 className='text-lg font-semibold my-2 pl-4'>Code</h2>
                    <div
                        style={customCodeStyle}
                        className={`${isVisible ? 'h-full transition-all 300ms ease-linear' : 'max-h-[200px] transition-all 300ms ease-linear'}`}
                    >
                        <SyntaxHighlighter
                            language='jsx'
                            style={nightOwl}
                            showLineNumbers
                            wrapLongLines
                        >
                            {code.trim()}
                        </SyntaxHighlighter>
                        <button
                            className='copy-button absolute top-2 right-4 bg-blue-500 text-white p-2 rounded-md cursor-pointer text-sm'
                            onClick={handleCopy}
                        >
                            {isCopied ? 'Copied' : <Copy className='h-5 w-5 text-gray-100' />}
                        </button>
                    </div>
                    <div
                        className='absolute bottom-3 w-fit px-4 right-0'
                        onClick={() => setisVisible(!isVisible)}
                    >
                        <button className='w-full text-center bg-gray-400 p-2 rounded-md hover:bg-gray-300 text-sm border border-gray-200'>
                            {isVisible ? 'Close' : 'Extend code'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Badge2

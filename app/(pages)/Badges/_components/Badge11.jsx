"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy } from "lucide-react";

const Badge11 = () => {
    const customCodeStyle = {
        backgroundColor: "#011627",
        borderRadius: "0.5rem",
        padding: "6px",
        fontSize: "16px",
        lineHeight: "1.5",
        position: "relative",
    };

    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        const textToCopy = code.trim();
        const textarea = document.createElement("textarea");
        textarea.value = textToCopy;
        textarea.style.position = "fixed";
        document.body.appendChild(textarea);

        try {
            textarea.select();
            document.execCommand("copy");
            console.log("Code copied to clipboard!");
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 3000);
        } catch (error) {
            console.error("Error copying to clipboard:", error);
        } finally {
            document.body.removeChild(textarea);
        }
    };

    const code = `
       
    <button type="button" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
    Messages
    <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-600 bg-blue-200 rounded-full">2</span>
    </button>
    

    `;

    const [isVisible, setisVisible] = useState(false);

    return (
        <div className="mt-4">
            <div>
                <h1 className="text-xl font-semibold"># Button with badge</h1>
                <div
                    className={`w-full  rounded-lg border border-black mt-6 overflow-hidden relative 
                ${isVisible && "overflow-y-auto"} `}
                >
                    <div className="p-4 ">
                        <div
                            className="flex justify-center"
                            dangerouslySetInnerHTML={{ __html: code }}
                        />
                    </div>
                    <h2 className="text-lg font-semibold my-2 pl-4">Code</h2>
                    <div
                        style={customCodeStyle}
                        className={`${isVisible
                            ? "h-full transition-all 300ms ease-linear"
                            : "max-h-[200px] transition-all 300ms ease-linear"
                            }`}
                    >
                        <SyntaxHighlighter
                            language="jsx"
                            style={nightOwl}
                            showLineNumbers
                            wrapLongLines
                        >
                            {code.trim()}
                        </SyntaxHighlighter>
                        <button
                            className="copy-button absolute top-2 right-4 bg-blue-500 text-white p-2 rounded-md cursor-pointer text-sm"
                            onClick={handleCopy}
                        >
                            {isCopied ? "Copied" : <Copy className="h-5 w-5 text-gray-100" />}
                        </button>
                    </div>
                    <div
                        className="absolute bottom-3 w-fit px-4 right-0"
                        onClick={() => setisVisible(!isVisible)}
                    >
                        <button className="w-full text-center bg-gray-400 p-2 rounded-md hover:bg-gray-300 text-sm border border-gray-200">
                            {isVisible ? "Close" : "Extend code"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Badge11;

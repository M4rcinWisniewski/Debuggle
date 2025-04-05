"use client";
import copyResult from "./copyResult"
import {useState} from "react";
import {Button} from "@/components/ui/button";

export default function Congratulations({tries}) {
    const [copied, setCopied] = useState(false)
    const [countStreak, setCountStreak] = useState(() => {
        // Initialize state from localStorage
        const saved = localStorage.getItem('count');
        return saved !== null ? JSON.parse(saved) : 0;
    });


    const date = new Date()
    const ifNumberLessThanTen = num => num < 10 ? `0${num}` : num
    const displayDate = `${date.getFullYear()}.${ifNumberLessThanTen(date.getMonth() + 1)}.${ifNumberLessThanTen(date.getDate())}`
    const result = copyResult()

    const copyText = () => {
        // Use the Clipboard API to copy the text to the clipboard
        navigator.clipboard.writeText(result).then(() => {

            setCopied(true);


            setTimeout(() => {
                setCopied(false);
            }, 2000);
        }).catch(err => {
            throw new Error(`Error copying text: ${err} `);
        });
    };

    return (
        <main className={`w-[40vw] h-[30vw] bg-[#282828] text-white rounded-2xl flex flex-col justify-center items-center gap-10`}>
            <div className={`flex flex-col justify-center items-center`}>
                <h1 className={`text-3xl`}>Congratulations!</h1>
                <p>{displayDate}</p>
            </div>
            <p>Your current streak: 🔥</p>
            <div>
                {result.split("\n").map((word, index) => <p key={index}>{word}</p>)}
            </div>
            <Button onClick={copyText}>
                {copied ? 'Copied!' : 'Copy to Clipboard'}
            </Button>
        </main>
    )
}


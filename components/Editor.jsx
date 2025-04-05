'use client';
import Editor from '@monaco-editor/react';
import TriesCounter from './triesCounter';
import { useState, useRef } from "react";
import { Button } from './ui/button';
import Dialog from './Dialog';
import data from "./data.json"
import useLocalStorage from "@/hooks/useLocalStorage";

export default function EditorComponent({message, setMessage}) {
    const {tries, markSolved, incrementTries} = useLocalStorage();
    const editorRef = useRef(null);
    const [triesArray, setTriesArray] = useState([])

    const solution = data.correct_code.trim();
    const codeToFix = data.buggy_code.trim();
    function handleEditorDidMount(editor) {
        editorRef.current = editor;

    }
    function resetCode() {

            editorRef.current.setValue(codeToFix);

    }
    function compareSolution() {
        const editorValue = editorRef.current.getValue().trim();



        const normalizeString = (str) => {
            return str
                .split('\n')
                .map(line => line.trim())
                .filter(line => line.length > 0)  // Remove empty lines
                .join('\n')
                //Dangerous regEx area 💀
                .replace(/\s+/g, ' ')  // Replace multiple spaces with a single space
                .replace(/\s*([=+\-*/<>!,():{}[\]])\s*/g, '$1')  // Remove spaces around operators and punctuation
                .replace(/\s+/g, ' ')  // Clean up any remaining multiple spaces
                .trim();
        };

        const normalizedEditorValue = normalizeString(editorValue);
        const normalizedSolution = normalizeString(solution);


        if (normalizedEditorValue === normalizedSolution) {
            setMessage("Congratulations!");
            incrementTries()
            triesArray.push(2)
            markSolved()
        } else {
            setMessage(`Not quite right. ${data.hints[tries < 2 ? tries : 1]} `)
            incrementTries()
            triesArray.push(1)

        }

    }

    return (
        <main className='flex justify-center items-center flex-col text-white gap-5'>
            <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-5'>
            <div className='w-[90vw] md:w-[50vw]'>
                <Editor
                    theme='vs-dark'
                    height="60vh"
                    defaultLanguage="python"
                    defaultValue={codeToFix}
                    onMount={handleEditorDidMount}
                />
            </div>
            <div className='flex flex-col justify-center items-center gap-5'>
                <Dialog message={message}/>
                <div className='flex gap-5'>{triesArray.map((el, i) => <TriesCounter key={i} color={el} />)}</div>
            </div>
            </div>
            <div className={`flex justify-center items-center gap-5`}>
                <Button variant={"default"} onClick={compareSolution}>Check Solution</Button>
                <Button variant={"destructive"} onClick={resetCode} >Reset code</Button>
            </div>
        </main>
    );
}


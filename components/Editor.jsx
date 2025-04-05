'use client';
import Editor from '@monaco-editor/react';
import TriesCounter from './triesCounter';
import { useState, useRef } from "react";
import { Button } from './ui/button';
import Dialog from './Dialog';
import data from "./data.json"
import useLocalStorage from "@/hooks/useLocalStorage";

export default function EditorComponent({message, setMessage, tries, incrementTries}) {
    const {markSolved} = useLocalStorage();
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
                .join('\n');
        };

        const normalizedEditorValue = normalizeString(editorValue);
        const normalizedSolution = normalizeString(solution);


        if (normalizedEditorValue === normalizedSolution) {
            setMessage("Congratulations!");
            incrementTries()
            triesArray.push(2)
            markSolved()
        } else {
            setMessage(`Not quite right. ${data.hints[tries.length <= 2 ? tries.length : 2]} `)
            incrementTries()
            triesArray.push(1)

        }

    }

    return (
        <main className='flex justify-center items-center flex-col text-white gap-5'>
            <div className='flex justify-center items-center gap-5'>
            <div className='w-[50vw]'>
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
            <Button variant={"default"} onClick={compareSolution}>Check Solution</Button>
            <Button variant={"destructive"} onClick={resetCode} >Reset code</Button>


        </main>
    );
}

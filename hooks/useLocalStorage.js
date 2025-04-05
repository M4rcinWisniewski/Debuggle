'use client';

import { useState, useEffect } from 'react';

export default function useLocalStorage() {
    const [tries, setTries] = useState(0);
    const [canSolve, setCanSolve] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    // Only run once after component mounts on client
    useEffect(() => {
        const today = new Date().toDateString();
        const storedTries = parseInt(localStorage.getItem('numberOfTries') || '0', 10);
        const lastSolvedDate = localStorage.getItem('riddleSolvedDate');

        setTries(storedTries);
        setCanSolve(lastSolvedDate !== today);
        setIsLoaded(true);
    }, []);

    const markSolved = () => {
        const today = new Date().toDateString();
        localStorage.setItem('riddleSolvedDate', today);
        setCanSolve(false);
    };

    const incrementTries = () => {
        const newTries = tries + 1;
        setTries(newTries);
        localStorage.setItem('numberOfTries', newTries.toString());
        return newTries;
    };

    const resetTries = () => {
        setTries(0);
        localStorage.setItem('numberOfTries', '0');
    };

    return {
        tries,
        canSolve,
        markSolved,
        incrementTries,
        resetTries,
        isLoaded
    };
}
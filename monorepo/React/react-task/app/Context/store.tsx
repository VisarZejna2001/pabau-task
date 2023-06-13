'use client';

import React, { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

type StepType = "1" | "2"


interface ContextProps {
    step: StepType;
    setStep: Dispatch<SetStateAction<StepType>>
}

const GlobalContext = createContext<ContextProps>({
    step: '1',
    setStep: (): string => ''
})

interface GlobalContextProviderProps {
    children: React.ReactNode
}

export const GlobalContextProvider = ({ children}: GlobalContextProviderProps ) => {
    const [step, setStep] = useState<StepType>('1');

    return (
        <GlobalContext.Provider value={{step, setStep}}>{children}</GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);
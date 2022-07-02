import React, { useState, useEffect, useRef, SyntheticEvent } from 'react';

export function useForm(InitialInputs?: any) {
    const [errorForm, setErrorForm] = useState({});
    const [inputs, setInputs] = useState(InitialInputs);
    //console.log('inputs', inputs)

    function veryfyInput(inputName: string, text: string,) {
        switch (inputName) {
            case 'title':
                const titlePattern = /(.*[a-z]){3}/i;
                if (titlePattern.test(text)) {
                    setErrorForm({ [inputName]: 'the title is too schort' });
                }
                break
            case 'email':
                const pattern = /@/;
                pattern.test(text);
                setErrorForm({ [inputName]: 'this is not an Email' });
                break
            default: break;
        }
    }
    function handleInputChange(e: SyntheticEvent) {
        //console.log(e.target)
        const key: string = (e.target as HTMLInputElement).name
        const value: string | number = (e.target as HTMLInputElement).value
        setInputs({ ...inputs, [key]: value });
    }
    function handleArray(name: string, valuesArray: string[]) {
        setInputs({ ...inputs, [name]: valuesArray })
    }
    function handleDate(name: string, date: number) {
        setInputs({ ...inputs, [name]: date })
    }

    function resetInputs() {
        setInputs({})
    }
    return { inputs, handleInputChange, resetInputs, handleArray, handleDate, veryfyInput, errorForm }
}
    //veryfy(inputs);
    //const key: string = (e.target as HTMLInputElement).name
/*
    function veryfy2(inputs: { year: number, name: string, email: string, password: string, title: string }) {
        //console.log('inputs', inputs)
        for (const name in inputs) {
            //console.log(name);
            //console.log(inputs[name])
            switch (name) {
                case 'title':
                    const titlePattern = /(.*[a-z]){3}/i;
                    if (titlePattern.test(inputs[name])) {
                        setErrorForm('the title is too schort')
                    }
                    //console.log('value', inputs[name]);
                    // set error if pattern is false
                    break
                case 'email':
                    const pattern = /@/;
                    pattern.test(inputs[name])
                    //console.log('value', inputs[name]);
                    // set error if pattern is false
                    break
                default: break;
            }
        }
    }
    */
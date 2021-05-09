import React, { useState, useEffect } from "react";
import axios from 'axios';
import {SoftwareUseCase} from './SoftwareUseCase';
import {Footer} from './Footer';

export const Software = () => {
    const [softwares, setSoftwares] = useState([]);
    const [useCases, setUseCases] = useState([]);
    const [selected, setSelected] = useState([]);
    const [counter, setCounter] = useState(0);
    
    function handleClick(id) {
        if (selected.includes(id)){
            setSelected(selected.filter(x => x !== id));
            setCounter(counter-1);
        }else if (counter == 3){
            alert('2')
        }else {
            setSelected( arr => [...arr, id]);
            setCounter(counter+1);
        }
    }

    useEffect(() => {
        const getUseCases = async () => {
            try {
                const res = await axios.get(`/software/all/usecases`)
                setUseCases(res.data.useCases);
            } catch (err) {
                console.log(err);
            }
        }
        const getSoftwares = async () => {
            try {
                const res = await axios.get(`/software/all/software`)
                setSoftwares(res.data.softwares);
            } catch (err) {
                console.log(err);
            }
        }
        getUseCases();
        getSoftwares();
    },[]);

    return (
        <>
            <h1>Select Software ({counter}/3)</h1>
            <p>Help us understand your use case by selecting your most commonly used software.</p>
            <div>
                {useCases.map(useCase => (<SoftwareUseCase onClick={handleClick} selected={selected} title={useCase.title} useCase={useCase.type} softwares={softwares}/>))}
            </div>

            <Footer link={'budget'} state={selected}/>
        </>
    )
}

import React from 'react'
import {SoftwareItem} from './SoftwareItem';

export const SoftwareUseCase = ({useCase, softwares, onClick, selected}) => {
    return (
        <div className="software-usecase">
            <p>{useCase.title}</p>
            <hr />
            <div className='software-selection'>
                {softwares.map(software => (software.useCase === useCase.type && <SoftwareItem selected={selected} onClick={onClick} software={software} /> ))}
            </div>
        </div>
    )
} 

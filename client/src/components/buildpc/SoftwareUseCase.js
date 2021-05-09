import React from 'react'
import {SoftwareItem} from './SoftwareItem';

export const SoftwareUseCase = ({title, useCase, softwares, onClick, selected}) => {
    return (
        <div className="software-usecase">
            <h2>{title}</h2>
            <hr />
            <div className='software-selection'>
                {softwares.map(software => (software.useCase === useCase && <SoftwareItem selected={selected} onClick={onClick} software={software} /> ))}
            </div>
        </div>
    )
} 

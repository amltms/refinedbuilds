import { useState, useEffect } from "react";
import {Footer} from '../../utility/Footer';

export const BuildOverview = (props) => {
    const [components, setComponents] = useState(props.location.state);
    console.log(components);
    return (
        <div>
            <h1>Build Overview</h1>
            <div className='components'>
                {components.length > 0 ? components.map(c => (
                    <div className='component'>
                        <img height="200" src={`/images/components/${c.type}/${c.img}`} />
                        <h3>{c.name}</h3>
                    </div>
                )): <h3>No Components Selected</h3>}
            </div>
        </div>
    )
}

import { useState, useEffect } from "react";
import {Footer} from '../../utility/Footer';

export const BuildOverview = (props) => {
    const [components, setComponents] = useState(props.location.state);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        components.map(c => (setTotal(prevTotal => (prevTotal + c.price))));
    },[]);

    return (
        <div>
            <h1>Build Overview</h1>
            <h1>£{Math.round(total * 100) / 100}</h1>
            <div className='components'>
                {components.length > 0 ? components.map(c => (
                    <div className='component'>
                        <h2>{c.type}</h2>
                        <hr className="grey" />
                        <img src={`/images/components/${c.type}/${c.img}`} />
                        <h3>{c.name}</h3>
                    </div>
                )): <h3>No Components Selected</h3>}
            </div>
        </div>
    )
}

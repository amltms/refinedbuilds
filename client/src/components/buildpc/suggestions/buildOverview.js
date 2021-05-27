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

                <table>
                <tr>
                    <th>Img</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Price</th>
                </tr>
                {components.length > 0 ? components.map(c => (
                    <tr>
    
                        <td><img src={`/images/components/${c.type}/${c.img}`} /></td>
                        <td>{c.name}</td>
                        <td>{c.type}</td>
                        <td>{c.price}</td>
                    </tr>
                )): <h3>No Components Selected</h3>}
                </table>
        </div>
    )
}

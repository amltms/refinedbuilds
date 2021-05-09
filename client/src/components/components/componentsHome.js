import {ComponentsHomeItem} from './ComponentsHomeItem';
import axios from 'axios';
import React, { useState, useEffect } from "react";

export const Components = () =>{
    const [attributes, setAttributes] = useState([]);

    useEffect(() => {
        const getAttributes = async () => {
            try {
                const res = await axios.get(`/components/attributes`)
                setAttributes(res.data.attributes);
            } catch (err) {
                console.log(err);
            }
        }
        getAttributes();
    },[]);   

   
    return(
        <div className="components">
            {attributes.map(attribute => (<ComponentsHomeItem attribute={attribute}/>))} 
         </div>
    )
}
    
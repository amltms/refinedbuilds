import React, { useState, useEffect } from "react";
import {Component} from './ComponentListItem';
import axios from 'axios';

export const ComponentList = (props) =>{
    const attributes = props.location.state;
    const [components, setComponents] = useState([]);

    useEffect(() => {
        const getComponents = async () => {
            try {
                const res = await axios.get(`/components/all/${attributes.type}`)
                setComponents(res.data.components);
            } catch (err) {
                console.log(err);
            }
        }
        getComponents();
    },[]);

    return(
        <div className="component-list">
            <h1>{attributes.title}</h1>
            <table>
                <tr>
                    <th>Name</th>
                    {attributes.attributes.map(attribute => (<th>{attribute.title}</th>))}
                    <th>Rating</th>
                    <th>Price</th>
                </tr>
                {components.map(component => (<Component key={component._id}  attributes={attributes.attributes} component={component}/>))}
            </table>
        </div>
    )
}
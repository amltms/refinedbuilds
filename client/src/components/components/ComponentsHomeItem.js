import React from 'react'
import { Link } from "react-router-dom";

export const ComponentsHomeItem = ({attribute}) => {
    return (
        <Link to={{pathname:`/components/${attribute.type}`, state: attribute}}>
            <div>{attribute.title}</div>
        </Link>
    )
}

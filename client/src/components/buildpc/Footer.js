import React from 'react'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const Footer = ({link, state}) => {
    let history = useHistory();

    return (
        <footer>
            <Link to={{pathname:`/${link}`, state: state}} className="main-btn">
                <div>Next</div>
            </Link>
          
            <a onClick={history.goBack} className="main-btn">
                <div>Back</div>
            </a>
        </footer>
    )
}

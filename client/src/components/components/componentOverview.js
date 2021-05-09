import { useLocation } from 'react-router-dom';
import React, { useState } from "react";

export const ComponentOverview = () => {
    const location = useLocation();
    const component = useState(location.state.attributes);
    
    return (
        <div>
           {component.id} 
        </div>
    )
}

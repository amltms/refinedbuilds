import { useState, useEffect } from "react";
import axios from 'axios';
import {SuggestionItem} from './SuggestionItem';
import {Footer} from '../../utility/Footer';
import { useHistory } from 'react-router-dom';

export const Suggestions = (props) => {
    const [components, setComponents] = useState(props.location.state);
    const [count, setCount] = useState(0);
    const [attributes, setAttributes] = useState([]);
    const [selected, setSelected] = useState([]);
    const history = useHistory();
    let cpuType = selected.find(s => s.type === 'cpu');
    let comp;
    console.log(components);

    function getSuggestionItems() {
        if ((components) && (attributes.length > 0)){
            let currentType = components[attributes[count].type];
            if ((cpuType) &&(attributes[count].type === 'motherboard')){
                currentType = currentType.filter(c => c.socket === cpuType.socket)
            }else if ((cpuType) &&(attributes[count].type === 'gpu')){
                currentType = currentType.filter(c => c.integratedGraphics === cpuType.integratedGraphics)
            }

            return currentType.slice(0, 3).map((c, index) => (
                <SuggestionItem 
                    selected={selected} 
                    attributes={attributes[count].attributes}
                    onClick={basket} 
                    component={c}
                    index={index}
                /> 
            ))
        }
    }

    function basket(comp) {
        if (selected.some(e => e.type === comp.type)) {
            setSelected(selected.filter(x => x.type !== comp.type));
            setSelected( arr => [...arr, comp]);
        }else {
            setSelected( arr => [...arr, comp]);
        }
    }

    function next() {
        if (count === Object.keys(components).length - 1){
            history.push({
                pathname: '/overview',
                state: selected
            })
        }else {
            setCount(count + 1);
        }
    }

    function prev(){
        if (count === 0){
            history.goBack();
        }else {
            setCount(count - 1);
        }
    }

    useEffect(() => {
        const getAttributes = async () => {
            try {
                const res = await axios.get(`/components/attributes/`)
                setAttributes(res.data.attributes)
            } catch (err) {
                console.log(err);
            }
        }
        getAttributes();
    },[]);

    return (
        <div className='buildpc'>
            <h1>{attributes.length > 0 ? attributes[count].title : 'Loading...'}</h1>
            <div className="suggestions-container">
            {getSuggestionItems()}
            </div>
            <Footer next={next} prev={prev}/>
        </div>
    )
}

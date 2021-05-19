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
    console.log(components);


    function basket(comp) {
        if (selected.some(e => e.type === comp.type)) {
            setSelected(selected.filter(x => x.type !== comp.type));
            setSelected( arr => [...arr, comp]);
        }else {
            setSelected( arr => [...arr, comp]);
        }
    }

    function next() {
        setCount(count + 1);
    }

    function prev(){
        if (count == 0){
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
            {attributes.length > 0 && components[attributes[count].type].map(c => (
                <SuggestionItem attributes={attributes[count].attributes} onClick={basket} component={c}/>
            ))}
            </div>
            <Footer next={next} prev={prev}/>
        </div>
    )
}

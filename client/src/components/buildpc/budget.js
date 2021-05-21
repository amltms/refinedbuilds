import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Footer} from '../utility/Footer'
import Slider from 'rc-slider';
import { useHistory } from 'react-router-dom';
import 'rc-slider/assets/index.css';

export const Budget = (props) => {
    const software = props.location.state;
    const [requirements, setRequirements] = useState({components: {}, budget: 0});
    const history = useHistory();
    
    function log(value) {
        requirements.budget = value;
        console.log(requirements);
        //eslint-disable-line
    }

    function next(){
        history.push({
            pathname: '/suggestions',
            state: requirements.components
        })
    }

    useEffect(() => {
        const getComponents = async (master) => {
            try {
                const res = await axios.post("/builds/tiers", master);
                setRequirements({
                    components: res.data.components,
                    budget: res.data.budget,
                });
            } catch (err) {
                console.log(err);
            }
        }
        var master = {cpu: 0, ram: 0, gpu: 0,storage: 0};

        software.map(s => (
            Object.keys(s.requirements).map(comp => (
                master[comp] < s.requirements[comp] && (
                    master[comp] = s.requirements[comp])
            ))
        ));
        getComponents(master);
        console.log(master);
    },[]);

    return (
        <>
            <h1>Select Budget</h1>
            <p>Drag up to how much you can spend on the whole build.</p>
            <div className='budget-price'>
                <h2>Suggested Price</h2>
                <p>£{requirements.budget}</p>
            </div>
            <Slider
                onAfterChange={log}
                step={null}
                defaultValue={50}
                trackStyle={{ backgroundColor: '#333', height: 40 }}
                railStyle={{ backgroundColor: '#eee', height: 40 }}
                dotStyle={{borderColor: '#eee'}}
                handleStyle={{
                    height: 58,
                    width: 58,
                    marginTop: -9,
                    backgroundColor: '#333',
                    border:'none',
                }}
                marks={{ 
                    0:'£400', 
                    10: '£600', 
                    20: '£800',
                    30: '£1000',
                    40: '£1200',
                    50: '£1400',
                    60: '£1600',
                    70: '£1800',
                    80: '£2000',
                    90: '£2200',
                    100: '£2200+',
                }}
            />
            <Footer next={next} prev={() => history.goBack()}/>
        </>
    )
}

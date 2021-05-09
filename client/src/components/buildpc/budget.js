import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Footer} from './Footer';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export const Budget = (props) => {
    const software = props.location.state;
    const [requirements, setRequirements] = useState({useCase: {}, budget: 0});
    function log(value) {
        requirements.budget = value;
        console.log(requirements);
        //eslint-disable-line
    }

    useEffect(() => {
        const getComponents = async (type, tier) => {
            try {
                const res = await axios.get(`/builds/${type}/${tier}`)
                requirements.useCase[type] = res.data.builds;
            } catch (err) {
                console.log(err);
            }
        }
        let collection = [];
        var master = {cpu: 0, ram: 0, gpu: 0,storage: 0};

        software.map(s => (collection.push(s.requirements)));
        (collection).map(software => (Object.keys(master).map(attribute => (master[attribute] < software[attribute] && (master[attribute] = software[attribute])))));
        
        requirements.useCase = master;
        getComponents('ram', master.ram);
        console.log(requirements);
    },[]);

    return (
        <>
            <h1>Select Budget</h1>
            <p>Drag up to how much you can spend.</p>
            <Slider
                onAfterChange={log}
                step={null}
                defaultValue={30}
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
                    20: '£800', 
                    40: '£1200',
                    60: '£1600',
                    80: '£2000',
                    100: '£2400+'}}
            />
            
            <Footer link={'suggestions'}/>
        </>
    )
}

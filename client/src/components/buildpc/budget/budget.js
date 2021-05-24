import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {Footer} from '../../utility/Footer'
import {SelectedSoftware} from './SelectedSoftware';

import Slider, { SliderTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
const { Handle } = Slider;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <SliderTooltip
      prefixCls="rc-slider-tooltip"
      overlay={`£${400+(value/5)*100}`}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </SliderTooltip>
  );
};

export const Budget = (props) => {
    const history = useHistory();
    const software = props.location.state;
    let master = {cpu: 0, ram: 0, gpu: 0,storage: 0};
    const [requirements, setRequirements] = useState({
        components: {}, 
        budget: 0,
        tiers: {},
        selectedBudget: 0,
        software: software
    });
    
    function log(value) {
        //eslint-disable-line
        requirements.selectedBudget = 400+(value/5)*100;
        console.log(requirements);
    }

    const next = async () =>{
        const budgetChange = (requirements.budget - requirements.selectedBudget)/100;
        console.log(budgetChange);
        try {
            await axios.post("/builds/change",  {
                tiers: master,
                budgetChange: budgetChange
            }).then(
                res => (history.push({
                    pathname: '/suggestions',
                    state: res.data
                }))
            )
         
        } catch (err) {
            console.log(err);
        }
        
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
        <div className='budget'>
            <h1>Select Budget</h1>
            <p>Drag up to how much you can spend on the whole build.</p>
                   <h2>Suggested Budget</h2>
                <p>£{requirements.budget}</p>
         
                <div className='software-container'>
                    {software && software.map(s => (<SelectedSoftware software={s} />))}
                </div>
            <Slider
                handle={handle} 
                onAfterChange={log}
                step={null}
                defaultValue={20}
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
                    5: '£500', 
                    10: '£600',
                    15: '£700',
                    20: '£800',
                    25: '£900',
                    30: '£1000',
                    35: '£1100',
                    40: '£1200',
                    45: '£1300',
                    50: '£1400',
                    55: '£1500',
                    60: '£1600',
                    65: '£1700',
                    70: '£1800',
                    75: '£1900',
                    80: '£2000',
                    85: '£2100',
                    90: '£2200',
                    95: '£2300',
                    100: '£2300+',
                }}
            />
            
            <Footer next={next} prev={() => history.goBack()}/>
        </div>
    )
}

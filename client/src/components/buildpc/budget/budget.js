import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {Footer} from '../../utility/Footer'
import {BudgetSelector} from './BudgetSelector'
import {SelectedSoftware} from './SelectedSoftware';

export const Budget = (props) => {
    const history = useHistory();
    const software = props.location.state;
    const [requirements, setRequirements] = useState({
        components: {}, 
        budget: 0,
        tiers: {},
        selectedBudget: 0,
        software: software
    });

    function onChange(e) {
        requirements.selectedBudget = parseInt(e.target.value);
    }

    const next = async () =>{
        if(requirements.budget != requirements.selectedBudget){
            let budgetChange = (requirements.budget - requirements.selectedBudget)/100;
            try {
                await axios.post("/builds/change",  {
                    tiers: requirements.tiers,
                    budgetChange: budgetChange
                }).then(
                    res => (history.push({
                        pathname: '/suggestions',
                        state: res.data
                    })))
            } catch (err) {
                console.log(err);
            }
        }
        history.push({
            pathname: '/suggestions',
            state: requirements.components
        })
    }

    useEffect(() => {
        let master = {cpu: 0, ram: 0, gpu: 0,storage: 0};
        const getComponents = async (master) => {
            try {
                const res = await axios.post("/builds/tiers", master);
                setRequirements({
                    components: res.data.components,
                    budget: res.data.budget,
                    selectedBudget: res.data.budget,
                    tiers: master
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
            <h1>Select Your Budget</h1>
            {requirements.budget != 0 ? (
                <BudgetSelector onChange={onChange} defaultVal={requirements.budget}/>
            ): <h1>Loading..</h1>}
            <div className='budget-container'>
                <div className='suggested-budget'>
                    <h3 className='title'>Suggested Budget</h3>
                    <p className='price'>£{requirements.budget}</p>
                </div>
                <div className='selected-software'>
                    <h3 className='title'>Selected Software</h3>
                    <div className='software-container'>
                        {software && software.map(s => (<SelectedSoftware software={s} />))}
                    </div>
                </div> 
            </div>

            
            <Footer next={next} prev={() => history.goBack()}/>
        </div>
    )
}

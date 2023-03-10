import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    // if(budget > 1000) {
    //     alert("Budget cannot exceed  £20,000");
    //     return;
    // }

    const setBudget = (value) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                style={{ marginLeft: '2rem', size: 10 }}
                step = '10'
                onChange={(event) => setBudget(event.target.value)}>
            </input>
        </div>
    );
};



export default Budget;

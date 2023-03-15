import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch , currency} = useContext(AppContext);

    const setBudget = (value) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value
        });
    }

    return (
        <div className='alert alert-secondary'>
            <label style={{ marginLeft: '2rem', size: 10 }}>Budget: {currency}</label>
            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                style={{ marginLeft: '0rem', size: 10 }}
                step = '10'
                onChange={(event) => setBudget(event.target.value)}>
            </input>
        </div>
    );
};



export default Budget;

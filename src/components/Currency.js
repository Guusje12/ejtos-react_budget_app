import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const changeCurrency = (currency) => {
        console.log({currency})
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency
        });
    }

    return (
        <span>
          <select 
            className='btn btn-success dropdown-toggle'
            id='currency'
            onChange={(event) =>changeCurrency(event.target.value)}>Currency ({currency})
              <option defaultValue={currency}>Currency ({currency} Pound)</option>
              <option value='£'>£ Pound</option>
              <option value='$'>$ Dollar</option>
              <option value='€'>€ Euro</option>
              <option value='₹'>₹ Rupee</option>
          </select>
          </span> 
    
      );
    };

export default Currency;

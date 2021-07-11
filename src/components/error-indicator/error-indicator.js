import React from 'react';
import Icon from './error-icon.png';
import './error-indicator.css';

export const ErrorIndicator = ({text = 'Error!'}) => {
    return (
        <div className='root'>
            <img src={Icon} alt='Error icon'/>
            <h2>{text}</h2>
        </div>
    )
}
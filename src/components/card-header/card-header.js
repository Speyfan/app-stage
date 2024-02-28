import React from 'react';
import './card-header.style.css'

export const CardHeader = props => {
    return <h3 className='card-header'>
        {props.title}
    </h3>
}
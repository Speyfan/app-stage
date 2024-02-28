import React from 'react';
import './card-body.style.css'

export const CardBody = props => {
    return <div className='card-body'>
        {props.body}
    </div>
}
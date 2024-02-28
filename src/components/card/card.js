import React from 'react';

import {CardBody} from '../card-body/card-body'
import {CardHeader} from '../card-header/card-header'

import './card.style.css'

export const Card = (props) => (
    <div className='card'>
        <CardHeader title={props.post.title}/>
        <br/>
        <CardBody body={props.post.body}/>
    </div>
)
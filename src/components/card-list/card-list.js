import React from 'react';

import { Card }  from '../card/card';

import './card-list.style.css';

export const CardList = props => {
    return (
            <div className="card-list">
                {props.posts.map(post => (
                    <Card key={post.id} post={post}/>
                ))}
            </div>
    )
}
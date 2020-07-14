import React from 'react';

const Card = ({data}) =>{
    const {id, title, body} = data
    return(
        <>
        <div>
            <p>{id}</p>
            <div>{title}</div>
            <div>{body}</div>
        </div>
        </>
    )
}
export default Card;
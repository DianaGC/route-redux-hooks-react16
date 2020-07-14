import React from 'react';
import './Card.css'

const Card = ({data}) =>{
    const {id, title, body} = data
    return(
        <>
        <div className="container">
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
        </>
    )
}
export default Card;
import React from 'react';

const Card = ({
    name,
    type,
    manaCost,
    text,
    flavor,
    imageUrl
}) => {
    console.log(Card)
    return (
        <div className="Card">
            {name} - { manaCost} <br />
            {type} <br />
            {text} <br />
            {flavor} <br />
            <img src={imageUrl} alt="" />
        </div>
    );
}

export default Card;
import React from 'react';

const Simpson = (props) => {
    let {name, url} = props
    return (
        <div>
        <h2>{name}</h2>
            <img src={url} alt="simpson"></img>
        </div>
    );
};

export {Simpson};
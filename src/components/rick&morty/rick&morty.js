import React from 'react';

const RickMorty = (props) => {
    let {id, name, status, species, gender, image} = props
    return (
        <div>
            <h5 className={'name1'}>{name}</h5>
            <img className={'image1'} src={image} alt=""/>
            <p> <b className={'bald'}>id</b> - {id}</p>
            <p> <b className={'bald'}>status</b> - {status}</p>
            <p> <b className={'bald'}>species</b> - {species}</p>
            <p> <b className={'bald'}>gender</b> - {gender}</p>
        </div>
    );
};

export {RickMorty};
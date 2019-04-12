
import React from 'react';
import {NavLink}from 'react-router-dom'



const HomeList = (props)=>{
    var PeopleDetails = `/details/${props.product.id}`;
    const {name,image,text} = props.product;
    return (
        <li className='chanpin'>
            <p>{name}</p>
            <p><img src={image}/></p>
            <p className='text'>{text}</p>
            <NavLink to={PeopleDetails}>详情</NavLink>
        </li>
    )
}

export default HomeList;
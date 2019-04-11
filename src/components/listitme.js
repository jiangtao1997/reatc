
import React from 'react';
import {NavLink}from 'react-router-dom'



const ListItem = (props)=>{
    var PeopleDetails = `/details/${props.product.id}`;
    const {name,image,text} = props.product;
    return (
        <li>
            产品名称：{name}
            <br/>
            产品图片：<img src={image}/>
            <br/>
            产品介绍：{text}
            <NavLink to={PeopleDetails}>详情</NavLink>
        </li>
    )
}

export default ListItem;
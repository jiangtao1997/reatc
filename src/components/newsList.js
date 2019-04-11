
import React from 'react';
import {NavLink}from 'react-router-dom'



const NewsList = (props)=>{
    var PeopleDetails = `/newsDetails/${props.product.id}`;
    const {title,image,text} = props.product;
    return (
        <li className='news-li'>
            产品名称：{title}
            <br/>
            产品图片：<img src={image}/>
            <br/>
            产品介绍：{text}
            <NavLink to={PeopleDetails}>详情</NavLink>
        </li>
    )
}

export default NewsList;
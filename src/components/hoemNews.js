
import React from 'react';
import {NavLink}from 'react-router-dom'



const HomeNews = (props)=>{
    var PeopleDetails = `/newsDetails/${props.product.id}`;
    const {title,image,text} = props.product;
    return (
        <li className='news-li'>
            <div className="row">
                <div className="col-md-6"><img src={image}/></div>
                <div className="col-md-6">
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <NavLink to={PeopleDetails}>详情</NavLink>
                </div>
            </div>
        </li>
    )
}

export default HomeNews;
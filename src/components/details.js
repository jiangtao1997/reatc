import React,{Component} from 'react';
import axios from "axios";
import {connect} from 'react-redux';
import { addToCart } from '../actions/carts';
const mapStateToProps = (state)=>{
    return {
        cart: state.cart
    }
}
class Detail extends Component{


    constructor(props){
        super(props);
        this.state={
            list:{}
        }
    }
    componentDidMount(){
        axios({
            url:`http://localhost:3000/counter/${this.props.match.params.id}`,
            method:'get'
        }).then(res=>{
            this.setState({
                list:res.data[0]
            });
        })
    }

    render(){
        var liData=this.state.list;
        return(
            <div>
                Detail:<br/>
                <div style={{position:'relative'}}>
                    <img src={liData.image}/>
                    <a href="javascript:" onClick={()=>this.props.addToCart(liData)} className="btn btn-primary btn-lg active" style={{position:"absolute",right:0,top:0}} role="button">加入购物车</a>
                    <br/>
                    {liData.name}<br/>
                    {liData.text}
                </div>
            </div>
        )
    }
}
const DetailContainer=connect(mapStateToProps,{addToCart})(Detail);
export default DetailContainer
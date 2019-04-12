import React,{Component} from 'react';
import axios from "axios";
import {connect} from 'react-redux';
import { addToCart } from '../actions/carts';
import style from '../main.css';
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
        console.log(this.state.list+'render');
        if(!liData){
            return <li>暂无数据</li>
        }
        return(
            <div>
                <div className="row xiangqing" style={{style}}>
                    <div className="col-md-6 xiangqing-img"><img src={liData.image}/></div>
                    <div className="col-md-6">
                        <h2>{liData.name}</h2>
                        <p>{liData.text}</p>
                        <p>{liData.data}</p>
                        <a href="javascript:" onClick={()=>this.props.addToCart(liData)} className="btn btn-primary btn-lg active" style={{position:"absolute",right:0,top:0}} role="button">加入购物车</a>
                    </div>
                </div>
            </div>
        )
    }
}
const DetailContainer=connect(mapStateToProps,{addToCart})(Detail);
export default DetailContainer
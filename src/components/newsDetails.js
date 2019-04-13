import React,{Component} from 'react';
import axios from "axios";
import {connect} from 'react-redux';
import style from '../main.css';
const mapStateToProps = (state)=>{
    return {
        cart: state.cart
    }
}
class NewsDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            list:{}
        }
    }


    componentDidMount(){
        axios({
            url:`http://129.204.206.178:3000/news/${this.props.match.params.id}`,
            method:'get'
        }).then(res=>{
            console.log(res.data);
            this.setState({
                list:res.data[0]
            });
        })
    }



    render(){
        var liData=this.state.list;
        return(
            <div>
                <div className="row xiangqing" style={{style}}>
                    <div className="col-md-6 xiangqing-img"><img src={liData.image}/></div>
                    <div className="col-md-6">
                        <h2>{liData.title}</h2>
                        <p>{liData.text}</p>
                        <p>{liData.data}</p>
                        <button href="javascript:" className="btn btn-primary btn-lg active">评论</button>
                    </div>
                </div>
            </div>
        )
    }
}


const DetailContainer=connect(mapStateToProps)(NewsDetail);
export default DetailContainer

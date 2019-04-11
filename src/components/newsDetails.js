import React,{Component} from 'react';
import axios from "axios";
import {connect} from 'react-redux';
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
            url:`http://localhost:3000/news/${this.props.match.params.id}`,
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
                Detail:<br/>
                <div style={{position:'relative'}}>
                    <img src={liData.image}/>
                    <button href="javascript:" className="btn btn-primary btn-lg active" style={{position:"absolute",right:0,top:0}}>评论</button>
                    <br/>
                    {liData.title}<br/>
                    {liData.text}
                </div>
            </div>
        )
    }
}


const DetailContainer=connect(mapStateToProps)(NewsDetail);
export default DetailContainer

import React,{Component} from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state=>{
    return {
        carts:state.carts
    }
}

class Carts extends Component{


    Delete(id){
        var list = this.props.carts;

            for(let i=0;i<list.length;i++){
                if(id==list[i].id){
                    if(confirm("确认删除？")){
                        this.props.carts.splice(i,1);
                        this.setState({
                            carts:this.props.carts
                        });
                    }
                }
            }
    }


    getCarts(){
        var Carts = this.props.carts;
        if(!Carts){
            return <li key={i}>暂无数据</li>;
        }
        var jsx = [];
        for(let i=0;i<Carts.length;i++){
            jsx.push(
                    <li key={i}>
                        产品样式：<img src={Carts[i].image}/>
                        <br/>
                        产品名称：{Carts[i].name}
                        <br/>
                        产品价格：{Carts[i].star.number}
                        <br/>
                        产品介绍：{Carts[i].text}
                        <br/>
                        购买数量：{Carts[i].quantity}
                        <br/>
                        价钱小计：{Carts[i].subTotal}
                        <br/>
                        <button className="btn btn-primary" data-toggle="button" onClick={()=>this.Delete(Carts[i].id)}>
                        删除
                        </button>
                    </li>
                );
        }
        return jsx;
    }

    render(){
        return(
            <div>
                {this.getCarts()}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Carts);
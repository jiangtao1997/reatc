import React,{Component} from 'react';
import { connect } from 'react-redux';
import style from '../main.css';

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
        console.log(this.props.carts+'getCarts');
        if(!Carts){
            return <li key={i}>暂无数据</li>;
        }
        var jsx = [];
        for(let i=0;i<Carts.length;i++){
            jsx.push(
                    <li key={i} className='goumai-li'>
                        <div className="row carts">
                            <div className="col-md-8 carts-img"><img src={Carts[i].image}/></div>
                            <div className="col-md-4">
                                <table>
                                <tbody>
                                    <tr>
                                        <th>产品名称</th>
                                        <th>产品名称</th>
                                        <th>产品名称</th>
                                        <th>产品名称</th>
                                        <th>删除商品</th>
                                    </tr>
                                    <tr>
                                        <td>{Carts[i].name}</td>
                                        <td>{Carts[i].star.number}</td>
                                        <td>{Carts[i].quantity}</td>
                                        <td>{Carts[i].subTotal}</td>
                                        <td>
                                            <button className="btn btn-primary" data-toggle="button" onClick={()=>this.Delete(Carts[i].id)}>
                                            删除
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </li>
                );
        }
        return jsx;
    }

    render(){
        return(
            <div>
                <ul className='goumai' style={style}>{this.getCarts()}</ul>

            </div>
        )
    }
}

export default connect(mapStateToProps)(Carts);
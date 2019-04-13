import React,{Component} from 'react';
//仓库的引入
import { connect } from 'react-redux';
import { fetchList,addToCart } from '../actions';
import ListItem from './listitme';
import chanpin from '../chanpin.css';
//3.现在有了一个仓库  仓库里有了初始值   将状态转换成属性
const mapStateToProps = (state)=>{
    return    {
        lists:state.counter.lists,
        total:state.counter.total,
        carts:state.carts
    }
}

//创建组件
class Counter extends Component{
    showList(){
        var lists = this.props.lists;
        if(!lists){
            return <li>暂无数据</li>;
        }
        var jsx = [];
        for(let i = 0;i<lists.length;i++){
            jsx.push(<ListItem key={i} product={lists[i]} addToCart={this.props.addToCart}/>);
        }
        return jsx;
    }


    render(){
        const {fetchList,lists,carts,addToCart} = this.props;
        return(
            <div>
                <ul className='counter' style={chanpin}>{this.showList()}</ul>
            </div>
        )
    }
    componentDidMount(){
        this.props.fetchList();
    }
}


//4.将状态转化成属性之后   和Counter组件建立起链接之后将视图组件变成了容器组件  这意味着组件中就有了属性数据
const CounterContainer = connect(mapStateToProps,{fetchList,addToCart})(Counter);

export default CounterContainer;
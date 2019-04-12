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


    // ChangePage = (page)=>{
    //    this.props.fetchList({page:page});
    // }

    // showPageList(){

    //     var jsx = [];
    //     if(this.props.total>0){
    //         var total = this.props.total / 10;
    //         for(let i=1;i<=total;i++){
    //             jsx.push(
    //                 <li key={i}><a onClick={()=>this.ChangePage(i)}>{i}</a></li>
    //                 )
    //         }
    //     }
    //     return jsx;
    // }

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

                <br/>
                {/*<nav aria-label="Page navigation">
                    <ul className="pagination">
                        <li>
                            <a href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        {this.showPageList()}
                        <li>
                            <a href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
        </nav>*/}
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
import React,{Component} from 'react';
import { connect } from 'react-redux';
import { fetchList,addToCart } from '../actions';
import { fetchLists } from '../actions/news';
import HomeList from './homelist';
import HomeNews from './hoemNews';
import style from '../main.css';
import Homenews from '../Homenews.css';

//3.现在有了一个仓库  仓库里有了初始值   将状态转换成属性
const mapStateToProps = (state)=>{
    return    {
        lists:state.counter.lists,
        listsNews:state.news.lists,
        total:state.counter.total,
        carts:state.carts,
    }
}


class Home extends React.Component{


    componentDidMount(){
        this.props.fetchList();
        this.props.fetchLists();
    }

     showList(){
         var lists = this.props.lists;
         if(!lists){
             return <li>暂无数据</li>;
         }
         var jsx = [];
         if(lists.length==0){
            return <li>暂无数据</li>
        }else{
            for(let i = 0;i<4;i++){
                jsx.push(<HomeList key={i} product={lists[i]} addToCart={this.props.addToCart}/>);
            }
        }
         return jsx;
     }
     showLists(){

        var listsNews = this.props.listsNews;
        if(!listsNews){
            return <li>暂无数据</li>;
        }
        var jsx = [];
        if(listsNews.length==0){
            return <li>暂无数据</li>
        }else{
            for(let i = 0;i<4;i++){
                jsx.push(<HomeNews key={i} product={listsNews[i]}/>);
            }
        }
        return jsx;
    }


    render(){
        console.log(this.props)
        return (
            <div>
                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel" style={{width:"100%",marginTop:-20}}>
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    </ol>


                    <div className="carousel-inner" role="listbox" style={{width:"80%",margin:'0 auto'}}>
                        <div className="item active">
                            <img src="http://dummyimage.com/1400x400/92f279" alt="..."/>
                            <div className="carousel-caption">
                            </div>
                        </div>
                        <div className="item">
                            <img src="http://dummyimage.com/1400x400/92f279" alt="..."/>
                            <div className="carousel-caption">
                            </div>
                        </div>
                        <div className="item">
                            <img src="http://dummyimage.com/1400x400/92f279" alt="..."/>
                            <div className="carousel-caption">
                            </div>
                        </div>
                    </div>


                    <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                {/* 推荐产品*/}
                <div className="row">
                    <div className="col-md-12">
                        <h3>产品推荐</h3>
                        <ul className='chanpin-ul' style={{style}}>
                            {this.showList()}
                        </ul>

                    </div>
                    <div className="col-md-12">
                        <h3>新闻内容</h3>
                        <ul className='Homenews-ul' style={{Homenews}}>
                            {this.showLists()}
                        </ul>

                    </div>
                </div>
            </div>
        )
    }



}


//4.将状态转化成属性之后   和Counter组件建立起链接之后将视图组件变成了容器组件  这意味着组件中就有了属性数据
const CounterContainer = connect(mapStateToProps,{fetchList,fetchLists,addToCart})(Home);

export default CounterContainer;
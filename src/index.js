import React from 'react';
import ReactDOM from 'react-dom';
//仓库的引入
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/home';
import About from './components/about';
import Counter from './components/counter';
import Details from './components/details';
import NewsDetails from './components/newsDetails';
import Carts from './components/carts';
import { HashRouter as Router,Route,NavLink,Switch } from 'react-router-dom';

class Index extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <Router>
                    <div>
                        <nav className="navbar navbar-default">
                            <div className="container-fluid">
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav">
                                        <li className="active"><NavLink to='/' exact>首页<span className="sr-only">(current)</span></NavLink></li>
                                        <li><NavLink to='/about'>新闻</NavLink></li>
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">产品 <span className="caret"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><NavLink to='/counter'>产品</NavLink></li>
                                            </ul>
                                        </li>
                                        <li><NavLink to='/carts'>购物车</NavLink></li>
                                    </ul>
                                    <form className="navbar-form navbar-left">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Search"/>
                                    </div>
                                    <button type="submit" className="btn btn-default">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                        <div>
                            <Switch>
                                <Route path='/' component={Home} exact/>
                                <Route path='/about' component={About}/>
                                <Route path='/counter' component={Counter}/>
                                <Route path='/details/:id' component={Details}/>
                                <Route path='/newsDetails/:id' component={NewsDetails}/>
                                <Route path='/carts' component={Carts}/>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        )
    }
}

//5.将仓库里的数据都传给组件  渲染出容器组件  通过Provider提供整个仓库给容器组件
ReactDOM.render(<Index/>,document.getElementById('app'));
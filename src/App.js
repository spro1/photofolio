import React, {Component} from 'react';
import Header from "./components/Header";
import Content from "./components/Content";
import Contact from "./components/Contact";
import Footer from './components/Footer';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import $ from "jquery";
import jsonData from "./static/data/data.json";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            all : []
        }
    }

    fetchData(){
        const data = []
        jsonData.picture.map(item =>(
            data.push(...item.imgs)
        ));
        this.setState({all:data})
    }

    componentDidMount() {
        $('a').click(function(){
            $('a').removeClass('on');
            $(this).addClass('on');
        });
        this.fetchData();
    }
    render() {
        let path = document.location.pathname.replace('/','');
        path = path.replace('/photofolio', '');
        if(path===""){
            $('a').removeClass('on');
            $('.CONTACT').addClass('on');
        }else{
            $('a').removeClass('on');
            $('.'+path).addClass('on');
        }

        return (
        <div>
            <Header id={jsonData.id} id_kr={jsonData.id_kr}/>
            <BrowserRouter>
                <div className="menu">
                    <Link to='/photofolio' className="CONTACT">CONTACT</Link>
                    <Link to={{
                        pathname: '/photofolio/ALL',
                        state:{
                            data : this.state.all
                        }
                    }} className="ALL">ALL</Link>
                    {jsonData.picture.map((item, key) =>(
                        <Link to={{
                            pathname:`/photofolio/${item.category}`,
                            state: {
                                data : item.imgs
                            }
                        }} className={item.category}>{item.category}</Link>
                    ))}
                    <Switch>
                        <Route exact path="/photofolio/ALL" component={Content}/>
                        {jsonData.picture.map((item, key) =>(
                            <Route exact path={`/photofolio/${item.category}`} component={Content}/>
                        ))}
                        <Route exact path="/photofolio" component={Contact}/>
                    </Switch>
                </div>
            </BrowserRouter>
            <Footer/>
        </div>
    );
  }
}


export default App;
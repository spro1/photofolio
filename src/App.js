import Footer from './components/Footer';
import React, {Component} from 'react';
import Header from "./components/Header";
import Content from "./components/Content";
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

    componentDidMount() {
        $('a').click(function(){
            $('a').removeClass('on');
            $(this).addClass('on');
        });
        const data = []
        jsonData.picture.map(item =>(
            data.push(...item.imgs)
        ));
        this.setState({all:data})
    }
    render() {
        const path = document.location.pathname.replace('/','');
        console.log(path);
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
                    <Link to="/" className="CONTACT">CONTACT</Link>
                    <Link to={{
                        pathname: '/ALL',
                        state:{
                            data : this.state.all
                        }
                    }} className="ALL">ALL</Link>
                    {jsonData.picture.map((item, key) =>(
                        <Link to={{
                            pathname:`/${item.category}`,
                            state: {
                                data : item.imgs
                            }
                        }} className={item.category}>{item.category}</Link>
                    ))}
                    <Switch>
                        <Route exact path="/ALL" component={Content}/>
                        {jsonData.picture.map((item, key) =>(
                            <Route exact path={`/${item.category}`} component={Content}/>
                        ))}
                        <Route exact path="/" component={Photo}/>
                    </Switch>
                </div>

            </BrowserRouter>
            <Footer/>
        </div>
    );
  }
}

function Photo({match}) {
    return <h2>여기서 사진을 감상하세요.</h2>
}

export default App;
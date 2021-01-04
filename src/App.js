import Footer from './components/Footer';
import React, {Component} from 'react';
import Header from "./components/Header";
import Content from "./components/Content";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <BrowserRouter>
                <div className="menu">
                    <Link to="/">ALL</Link>
                    <Link to="/photo">LANDSCAPE</Link>
                    <Link to="/photo">HUMAN</Link>
                    <Link to="/photo">ANIMAL</Link>
                    <Link to="/photo">CONTACT</Link>
                    <Switch>
                        <Route exact path="/" component={Content}/>
                        <Route path="/photo" component={Photo}/>
                    </Switch>
                </div>

            </BrowserRouter>
            <Footer/>
        </div>
    );
  }
}
function Home({match}){
    return <h2>여기는 홈페이지입니다.</h2>
}
function Photo({match}) {
    return <h2>여기서 사진을 감상하세요.</h2>
}

export default App;
import React, {Component} from 'react';
import Header from "./components/Header";
import Content from "./components/Content";
import Contact from "./components/Contact";
import Footer from './components/Footer';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import $ from "jquery";
import jsonData from "./static/data/data.json";
import Container from "react-bootstrap/cjs/Container";
import Col from "react-bootstrap/cjs/Col";
import Row from "react-bootstrap/cjs/Row";

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
        const path = document.location.pathname.replace('/','');
        if(path===""){
            $('a').removeClass('on');
            $('.CONTACT').addClass('on');
        }else{
            $('a').removeClass('on');
            $('.'+path).addClass('on');
        }

        return (
        <Container>
            <Row>
                <Col md={{span: 8, offset: 2}}>
                    <Header id={jsonData.id} id_kr={jsonData.id_kr}/>
                </Col>
            </Row>
            <BrowserRouter>
                <Row>
                <Col md={{span: 8, offset: 2}}>
                    <div className="menu">
                    <Link to='/' className="CONTACT">CONTACT</Link>
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
                        <Route exact path="/" component={Contact}/>
                    </Switch>
                    </div>
                </Col>
                </Row>
            </BrowserRouter>
            <Footer/>
        </Container>
    );
  }
}


export default App;
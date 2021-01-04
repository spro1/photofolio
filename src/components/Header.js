import React, {Component} from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom"

export default class Header extends Component{
    render() {
        return (
            <header class="header">
                <h1>Doltograph</h1>
                <h3>돌토그래퍼</h3>
            </header>
        );
    }
}
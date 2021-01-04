import React, {Component} from "react";

export default class Header extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header">
                <h1>{this.props.id}</h1>
                <h3>{this.props.id_kr}</h3>
            </header>
        );
    }
}
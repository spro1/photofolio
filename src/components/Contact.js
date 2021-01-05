import React, {Component} from "react";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import jsonData from "../static/data/data.json";

import {FaUserAlt} from 'react-icons/fa';
import {AiTwotoneMail, AiFillInstagram} from 'react-icons/ai'
import {ImInstagram, ImGithub} from 'react-icons/im'
import ReactCountryFlag from "react-country-flag"


export default class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Container fluid="md">
                <Row>
                    <Col md={{ span:3, offset:2}} className="contact_img">
                        <img
                            src={jsonData.contact.profile_img}
                            style={{width: "100%", display: "block"}}
                        />

                        <small>photo by <a href="https://www.instagram.com/saj_inyong/" style={{color: "#000", textDecoration:"none"}} target="_blank">@saj_inyong</a></small>

                    </Col>
                    <Col className="contact_desc">
                        <Row>
                            <h6><FaUserAlt/>   {jsonData.contact.name}
                        ( {jsonData.contact.age}/
                        <ReactCountryFlag
                            svg
                            countryCode={jsonData.contact.country}/> )</h6>
                        </Row>
                        <Row>
                            <h6><AiTwotoneMail/>    {jsonData.contact.email}</h6>
                        </Row>
                        <Row>
                            <a href={jsonData.contact.instagram} target="_blank"><h6><ImInstagram/>  {jsonData.contact.instagram}</h6></a>
                        </Row>
                        <Row>
                            <a href={jsonData.contact.instagram_photo} target="_blank"><h6><ImInstagram/>  {jsonData.contact.instagram_photo}</h6></a>
                        </Row>
                        <Row>
                            <a href={jsonData.contact.github} target="_blank"><h6><ImGithub/>  {jsonData.contact.github}</h6></a>
                        </Row>
                        <Row className="intro">
                            <p>{jsonData.contact.intro}</p>
                            <p>{jsonData.contact.intro_en}</p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}
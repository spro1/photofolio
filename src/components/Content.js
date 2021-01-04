import React, {Component} from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import Container from "react-bootstrap/cjs/Container";
export default class Content extends Component{
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        this.props.location.state.data.sort(function(a, b){
            return .5 - Math.random();
        });
        return (
            <Container>
                <Masonry columnsCount={3} gutter="10px">
                    {this.props.location.state.data.map((image, i) =>(
                        <img
                            key = {i}
                            src = {image.img}
                            style={{width: "100%", display: "block"}}
                        />
                    ))}
            </Masonry>
            </Container>
        );
    }
}
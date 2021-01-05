import React, {Component} from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import Container from "react-bootstrap/cjs/Container";
import Button from "react-bootstrap/cjs/Button";
import $ from "jquery";
import "animate.css";

export default class Content extends Component{
    constructor(props) {
        super(props);

        this.state = {

        };

    }


    componentDidMount() {
        this.props.location.state.data.sort(function(a, b){
            return .5 - Math.random();
        });
    }

    render() {
        $(document).ready(function(){
            $('img').click(function(){
                $('.modal').addClass('on');
                $('.modal').addClass('fade-in');
                $('.modal').addClass('animate__fadeInLeft');
                $('.modal').removeClass('animate__fadeOutRight');
                $('body').css('overflow', 'hidden');
                const modal = $('.modal-image');
                const image = $(this).attr('src');
                modal.attr('src', image);
                let width = $('.modal-image').width();
                let height = $('.modal-image').height()
                if (width > height){
                    $('.modal-image').css('max-width','95%');
                    $('.modal-image').css('height','auto');

                }else{
                    $('.modal-image').css('max-height','95%');
                    $('.modal-image').css('width','auto');
                }
                console.log($('.modal-image').width(), $('.modal-image').height());
            })

            $('.modal').click(function(){
                $('.modal').removeClass('animate__fadeInLeft');
                $('.modal').addClass('animate__fadeOutRight').delay(1000);

                //$('.modal').removeClass('on');
                $('.modal').removeClass('fade-in');
                $('body').css('overflow', 'scroll');

            })
        })


        return (
            <Container>
                <Masonry columnsCount={3} gutter="10px">
                    {this.props.location.state.data.map((item, i) =>(
                        <img
                            key = {i}
                            src = {item.img}
                            style={{width: "100%", display: "block"}}

                        />
                    ))}
                </Masonry>
                <div className="modal animate__animated">
                    <img className="modal-image" align="center"/>
                </div>
            </Container>
        );
    }
}

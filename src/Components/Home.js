import React from "react"
import "./main.css"
import Logo from "../images/cjbox.svg"
import {Row, Col} from "reactstrap"
import jQuery, {$} from "jquery"

const Home = () => {

    jQuery(document).ready(function(){
        $('h1').mousemove(function(e){
          var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
          var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
          $('h1').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
        });
     });

    return(
        <div className="home">
            <Row>
                <Col md="2">
                    <div>
                    <div className="logoBox d-flex">
                            <img src={Logo} className="mainLogo" alt="logo" />
                      <h1 className="tagLine">
                        Courtney Jones
                        <br/>
                         <span className="subText">UX Front-End Developer</span>
                      </h1>
                    </div>
                    </div>   
                </Col>
                {/* <Col md="4"></Col>
                <Col md="5"></Col> */}
            </Row>
            <Row>
                {/* <Col md="6">
                    <div>About</div>
                    <div>Projects</div>
                    <div>Contact</div>
                </Col> */}
            </Row>
        </div>
    )
}

export default Home
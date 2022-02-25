import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo6 from '../../images/logo6.png';
import './Registration.css';
const Registration = () => {
    return (
       <div className='registration_section'>
             <Container fluid>
            <Row>
                <Col sm={12} md={6} lg={6}>
                    <div className='registred_text'>
                        <h1>Registered intermediaries</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur soluta, cum praesentium, optio fugit ad eveniet animi cumque adipisci accusamus nam quas saepe in. Corrupti natus eaque dolores fugiat voluptatibus?
                        Dignissimos ex sapiente ipsa facilis illum, cupiditate est eos? Sunt voluptas esse numquam, exercitationem minus pariatur.
                        </p>
                       <div  className='registred_text_role'> <div></div> <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eaque fuga, commodi cumque suscipit ipsam veniam laudantium explicabo? Reiciendis soluta</p></div>
                       <div  className='registred_text_role'> <div></div> <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eaque fuga, commodi cumque suscipit ipsam veniam laudantium explicabo? Reiciendis soluta</p></div>
                       <div  className='registred_text_role'> <div></div> <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eaque fuga, commodi cumque suscipit ipsam veniam laudantium explicabo? Reiciendis soluta</p></div>
                        <button className='btn btn_text_2'>Join Now</button>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <img className='img-fluid  image' src={logo6} alt="" />
                </Col>
            </Row>
        </Container>
       </div>    
    );
};

export default Registration;
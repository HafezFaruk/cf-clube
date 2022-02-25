import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo4 from '../../images/logo4.png';
import logo5 from '../../images/logo5.png';
import "./Blogs.css";
const Blogs = () => {
  return (
    <section className="blog_section">
      <Container fluid>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <div>
              <h1>Blogs</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                Deserunt, earum enim. At, iusto minus pariatur sapiente labore
                <br />
                officiis hic voluptatibus velit tempora, suscipit repellendus
                <br />
                debitis accusantium atque? Rerum, expedita optio?
              </p>
              <button className="btn btn_text-2">See All</button>
            </div>
          </Col>
          <Col sm={12} md={6} lg={8}>
           <div className="card h-100">
               <div className="card1">
               <img className="img-fluid imgs" src={logo5} alt="" />
               </div>
               <div className="card2">
               <img className="img-fluid imgs" src={logo4} alt="" />
               </div>
           </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Blogs;
{/* <img className="img-fluid img" src={logo3} alt="" /> */}
{/* <img className="img-fluid imgs" src={logo4} alt="" /> */}
{/* <img className="img-fluid imgs" src={logo5} alt="" /> */}
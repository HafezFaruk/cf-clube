import React from "react";
import logo4 from '../../images/logo4.png';
import logo5 from '../../images/logo5.png';
import logo3 from '../../images/logo3.png';
import "./Blogs.css";
const Blogs = () => {
  return (
    <section className="blog_section">
      <div className="container">
        <div className="row">
          <div className="col  row-col-md-4 row-col-lg-4">
            <div className="h-100 mt-5">
              <h1>Blogs</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt, earum enim. At, iusto minus pariatur sapiente labore
                officiis hic voluptatibus velit tempora, suscipit repellendus
                debitis accusantium atque? Rerum, expedita optio?
              </p>
              <button className="btn btn_text-2">See All</button>
            </div>
          </div>
          <div className="col  row-col-md-3 row-col-lg-3 mt-3">
            <div className="card h-100">
              <div className="card1">
                <img className="img-fluid imgs" src={logo5} alt="" />
              </div>
              <div className="card2 mt-3">
                <img className="img-fluid imgs" src={logo4} alt="" />
              </div>
            </div>
          </div>

          <div className="col  row-col-md-4 row-col-lg-4">
            <div className="card h-100">
              <img className="gallery " src={logo3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
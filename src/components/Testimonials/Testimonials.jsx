import React from "react";
import "./Testimonials.css";
import { photo6, photo8, photo9 } from "../../assets";

const Testimonials = () => {
  return (
    <section id="testimonials" className="dark-gray">
      <div className="wrapper">
        <h2>What our students say?</h2>
        <div className="contant-contanier">
          <div className="testimonial">
            <img src={photo6} alt="testimonial-photo" />
            <div className="reviwer-detail">
              <div className="name">Peter Adams</div>
              <div className="company-name">Google</div>
              <div className="review">
                This is a great course. I got to learn a lot.
              </div>
            </div>
          </div>

          <div className="testimonial">
            <img src={photo8} alt="testimonial-photo" />
            <div className="reviwer-detail">
              <div className="name">Robert Fox</div>
              <div className="company-name">Microsoft</div>
              <div className="review">
                I got to learn a lot about Music Production with this course.
                Thanks :)
              </div>
            </div>
          </div>

          <div className="testimonial">
            <img src={photo9} alt="testimonial-photo" />
            <div className="reviwer-detail">
              <div className="name">Emily Smith</div>
              <div className="company-name">FaceBook</div>
              <div className="review">Awesome! Great job!!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

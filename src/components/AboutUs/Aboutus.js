import React from "react";
import Logo from '../../assets/android.jpg'
import log from '../../assets/img4.png'
import images from '../../assets/img3.png'
import './About.css'
const Aboutus = () => {
  return (
    <>
      <div className="hero-image">
        <div className="hero-text">
          <div className="home">
              <h1 className="display-4 heading">Our Mission</h1>
            <div className="text">
              <div className="bad">

            <div className="card g" >
                <img className="card-img-top" src={Logo} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-text">
                    Android Development
                  </h5>
                  <p>This is Android Application Development</p>
                </div>
              </div>
            <div className="card g">
                <img className="card-img-top" src={log} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-text">
                    React Development
                  </h5>
                  <p>This is Web Development in React JavaScript </p>
                </div>
              </div>
            <div className="card g" >
                <img className="card-img-top" src={images} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-text">
                    Web Development
                  </h5>
                  <p>This is Web Development in Bootstrap </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;

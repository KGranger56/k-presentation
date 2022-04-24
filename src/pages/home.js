import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="block-1">
        <h1>
          Kelly Granger <hr />
        </h1>
        <h5>Austin, TX</h5>
      </div>

      <div className="block-2">
        <div className="container">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/032/420/original/_20190212_211746.JPG?1650569094"
            alt="Kelly and Tucker"
            border="0"
            className="kelly-img"
          />
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/032/416/original/messages_0.jpeg?1650567495"
            alt="Kelly"
            border="0"
            className="kelly-img"
          />
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/032/417/original/messages_0_%281%29.jpeg?1650567524"
            alt="Kelly and Whiskey"
            border="0"
            className="kelly-img"
          />
        </div>
        <br />
      </div>

      <div className="block-4">
        <h4>Introduction to Rock Climbing</h4>
        <div className="climber">🧗‍♀️</div>
      </div>
    </div>
  );
};

export default Home;

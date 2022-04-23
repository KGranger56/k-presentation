import React from "react";
import "./App.css";
import NavbarMenu from "./NavbarMenu";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="app">
      <div id="app" />
      <NavbarMenu />
      <Footer />
    </div>
  );
}

/*import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/032/416/original/messages_0.jpeg?1650567495",
    caption: "Sunny Kelly",
  },
  {
    url: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/032/417/original/messages_0_%281%29.jpeg?1650567524",
    caption: "Whiskey and Kelly",
  },
  {
    url: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/032/420/original/_20190212_211746.JPG?1650569094",
    caption: "Tucker and Kelly",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}>
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};*/

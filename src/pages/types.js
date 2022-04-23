import React from "react";
import "./types.css";

const Types = () => {
  return (
    <div className="types">
      <div className="block-1 ">
        <div id="types">
          <h1>Types of Climbing</h1>
        </div>
        <ul className="jump-to">
          <li>
            <a href="#bouldering" title="Bouldering">
              Bouldering
            </a>
          </li>
          <li>
            <a href="#top-rope" title="Top Rope">
              Top Rope
            </a>
          </li>
          <li>
            <a href="#lead" title="Lead">
              Lead
            </a>
          </li>
          <li>
            <a href="#trad" title="Traditional">
              Traditional
            </a>
          </li>
          <li>
            <a href="#soloing" title="Soloing/Scrambeling">
              Soloing
            </a>
          </li>
          <br />
        </ul>
      </div>

      <div className="block-2">
        <div className="box-1">
          <div id="bouldering">
            <h3>Bouldering</h3>
            <div className="box-2 group-a">
              <div className="container">
                <img
                  src="https://i.lensdump.com/i/t0zAXF.jpg"
                  alt="t0zAXF.jpg"
                  border="0"
                />
              </div>
              <div>
                <p className="box-a">
                  Bouldering is a form of free climbing that is performed on small rock
                  formations or artificial rock walls without the use of ropes or
                  harnesses. Unlike free solo climbing, which is also performed without
                  ropes, bouldering problems (the sequence of moves that a climber
                  performs to complete the climb) are usually less than 20 ft tall.
                </p>
              </div>
            </div>
            <br />
            <a href="#types">
              <em>Back to top</em>
            </a>
          </div>
        </div>
      </div>

      <div className="block-3">
        <div className="box-1">
          <div id="top-rope">
            <h3>Top Roping</h3>
            <div className="box-2 group-b">
              <div className="box-3 a">
                <p className="box-b">
                  Top rope climbing (or top roping) is a style in climbing in which the
                  climber is securely attached to a rope which then passes up, through an
                  anchor system at the top of the climb, and down to a belayer at the foot
                  of the climb. The belayer takes in slack rope throughout the climb, so
                  that if at any point the climber were to lose their hold, they would not
                  fall more than a short distance.
                </p>
              </div>
              <div className="container">
                <img
                  src="https://i1.lensdump.com/i/t0zir3.jpg"
                  alt="t0zir3.jpg"
                  border="0"
                />
              </div>
            </div>
            <br />
            <a href="#types">
              <em>Back to top</em>
            </a>
          </div>
        </div>
      </div>

      <div className="block-2">
        <div className="box-1">
          <div id="lead">
            <h3>Lead (Sport)</h3>
            <div className="box-2 group-a">
              <div className="container">
                <img
                  src="https://i2.lensdump.com/i/t0zj40.jpg"
                  alt="t0zj40.jpg"
                  border="0"
                />
              </div>
              <div className="box-3">
                <p className="box-a">
                  Lead climbing is a climbing style where one climber has to take the lead
                  while the other climbers follow. The lead climber wears a harness
                  attached to a climbing rope, which in turn is connected to the other
                  climbers below the lead climber. While ascending the route, the lead
                  climber periodically connects the rope to protection equipment for
                  safety in the event of a fall. One of the climbers below the lead
                  climber acts as a belayer.
                </p>
              </div>
            </div>
            <br />
            <a href="#types">
              <em>Back to top</em>
            </a>
          </div>
        </div>
      </div>

      <div className="block-3">
        <div className="box-1">
          <div id="trad">
            <h3>Traditional (Trad)</h3>
            <div className="box-2 group-b">
              <div className="box-3 a">
                <p className="box-b">
                  Traditional climbing (or Trad climbing), is a style of rock climbing in
                  which the climber places all the necessary protection gear required to
                  arrest any falls as they are climbing, and then removes it when the
                  pitch is complete (often done by the second/follow-on climber)
                </p>
              </div>
              <div className="container">
                <img
                  src="https://i.lensdump.com/i/t0zZiq.jpg"
                  alt="t0zZiq.jpg"
                  border="0"
                />
              </div>
            </div>
            <br />
            <a href="#types">
              <em>Back to top</em>
            </a>
          </div>
        </div>
      </div>

      <div className="block-2">
        <div className="box-1">
          <div id="soloing">
            <h3>Soloing</h3>
            <div className="box-2 group-a">
              <div className="container">
                <a href="https://lensdump.com/i/t0z0ND">
                  <img
                    src="https://i3.lensdump.com/i/t0z0ND.jpg"
                    alt="t0z0ND.jpg"
                    border="0"
                  />
                </a>
              </div>
              <div className="box-3">
                <p className="box-a">
                  Solo climbing, or soloing, is a style of climbing in which the climber
                  climbs alone, without the assistance of another person belaying. It is
                  generally done on higher walls than bouldering. These climbs are
                  generally undertaken on routes that require safety gear to be completed
                  safely. A fall while Soloing, will likely be fatal.
                </p>
              </div>
            </div>
            <br />
            <a href="#app">
              <em>Back to top</em>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Types;

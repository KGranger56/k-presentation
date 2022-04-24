import React from "react";
import "./safety.css";

const Safety = () => {
  return (
    <div className="safety">
      <div className="block-1">
        <div id="safety" />
        <h1>
          Safety Considerations
          <hr />
        </h1>
        <h2>Climbing is a dangerous sport.</h2>
      </div>
      <div className="block-2">
        <div className="row">
          <div className="box-a">
            <h3>Communicate with your partner</h3>
            <p>
              Make sure you and your partner have communication for basic requests. Do
              safety checks before every climb.
            </p>
          </div>
          <div className="box-b">
            <h3>Check your harness and your partners harness</h3>
            <p>
              The consequences are severe if your harness is not properly tightened or
              buckled.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="box-a">
            <h3>If you climb with a rope, you will tie thousands of knots.</h3>
            <p>Be cognizent of your knots. Double check them every time.</p>
          </div>
          <div className="box-b">
            <h3>Know your belayer</h3>
            <p>
              Make sure you ask about the person if you dont know them. Make sure they
              know how to effectively belay.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="box-a">
            <h3>Check your rope</h3>
            <p>
              Check your rope for a broken core. Flake your rope. Make sure you tie in a
              stopper knot. Ensure your rope is long enough.
            </p>
          </div>
          <div className="box-b">
            <h3>Break assisted Belay device</h3>
            <p>
              Do not lead with unknown device's. Learn how to into using a break assisted
              device.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="box-a">
            <h3>Wear a helmet</h3>
            <p>
              A helmet is a must for the blayer. The climber should wear a hemlet as well.
            </p>
          </div>
        </div>
      </div>
      <div className="back-to-top">
        <a href="#safety">
          <em>Back to top</em>
        </a>
      </div>
    </div>
  );
};

export default Safety;

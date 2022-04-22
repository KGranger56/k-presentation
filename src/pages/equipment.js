import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Equipment = () => {
  return (
    <div className="equipment">
      <div id="equipment" />
      <div className="block-1">
        <div className="box-1">
          <h1>Equipment</h1>
          <h3>
            {" "}
            Different{" "}
            <a href="./types" title="types">
              types
            </a>{" "}
            of climbing will require some basic equipment
          </h3>
        </div>
      </div>
      <div className="block-2">
        <div className="box-1">
          <h3>Bouldering</h3>
          <h5 id="shoes">Shoes</h5>
          <FontAwesomeIcon icon="fa-solid fa-shoe-prints" className="shoes" />
          <p>
            Bouldering will require specific shoes. You need shoes for both inside and
            outdoor climbing.
          </p>
          <h5 id="chalk">Chalk</h5>
          <p>
            Powdered chalk is used to dry your hands. The chalk is stored in a chalk bag
            which straps to your waist so you can carry it with you on your climb
          </p>
          <h5>Crash Pad</h5>
          <FontAwesomeIcon icon="fa-solid fa-person-falling-burst" />
          <p>
            A crash pad is placed below the route you are climbing, to provide a softer
            place to land.
            <br />
            If climbing indoors, a crash pad is not needed as anywhere that is designated
            for bouldering will have permanent pads.
          </p>
        </div>
      </div>
      <div className="block-3">
        <div className="box-1">
          <h3>Top Rope</h3>
          <a href="#shoes">
            <h5>Shoes</h5>
            <FontAwesomeIcon icon="fa-solid fa-shoe-prints" className="shoes" />
          </a>
          <a href="#chalk">
            <h5>Chalk</h5>
          </a>
          <h5 id="harness">Harness</h5>
          <p>
            You must be tied into an existing rope that is already up. To tie in, you need
            a harness
          </p>
          <h5 id="belayer">Belayer or Auto Belay</h5>
          <p>A belayer (second person) who will be your anchor on the ground.</p>
          <h5 id="device">Belay Device</h5>
          <p>
            A belay device is how the belayer will keep the rope tight and lower the
            climber. The basic device is called an ATC and does not have any assisted
            breaking
          </p>
        </div>
      </div>
      <div className="block-4">
        <div className="box-1">
          <h3>Lead</h3>
          <a href="#shoes">
            <h5>Shoes</h5>
            <FontAwesomeIcon icon="fa-solid fa-shoe-prints" className="shoes" />
          </a>
          <a href="#chalk">
            <h5>Chalk</h5>
          </a>
          <a href="#harness">
            <h5>Harness</h5>
          </a>
          <a href="#belayer">
            <h5>Belayer</h5>
          </a>
          <a href="#device">
            <h5>Belay Device</h5>
          </a>
          <h5 id="rope">Rope</h5>
          <p>You must bring and place your own rope as there are none left up.</p>
          <h5 id="quick-draws">Quick Draws</h5>
          <p>
            Quick Draws will be placed at every anchor point on your route. Anchor points
            are already defined and 'bolted' into the route
          </p>
          <h5 id="helmet">Helmet</h5>
          <p>
            The belayer should always have a helmet. If the belayer gets knocked out by
            falling debris, They could drop the climber.
          </p>
          <h5 id="pas">Personal Anchor System (PAS)</h5>
          <p>Rigging designed to let you attach yourself to an anchor.</p>
        </div>
      </div>
      <div className="block-5">
        <div className="box-1">
          <h3>Trad</h3>
          <a href="#shoes">
            <h5>Shoes</h5>
            <FontAwesomeIcon icon="fa-solid fa-shoe-prints" className="shoes" />
          </a>
          <a href="#chalk">
            <h5>Chalk</h5>
          </a>
          <a href="#harness">
            <h5>Harness</h5>
          </a>
          <a href="#belayer">
            <h5>Belayer</h5>
          </a>
          <a href="#device">
            <h5>Belay Device</h5>
          </a>
          <a href="#rope">
            <h5>Rope</h5>
          </a>
          <a href="#quick-draws">
            <h5>Quick Draws</h5>
          </a>
          <a href="#helmet">
            <h5>Helmet</h5>
          </a>
          <a href="pas">
            <h5>Personal Anchor System (PAS)</h5>
          </a>
          <h5>Rack</h5>
          <p>
            Multiple pieces of gear designed to place your own anchors. <br /> There are
            two main types of gear. Active and Passive. <br /> Active gear has moving
            parts that can expand and contract to fit a placement. <br /> Passive gear has
            no moving parts and depends on the shape of the gear being appropriate to the
            placement.
          </p>
        </div>
      </div>
      <div className="block-6">
        <div className="box-1">
          <h3>Soloing</h3>
          <a href="#shoes">
            <h5>Shoes</h5>
            <FontAwesomeIcon icon="fa-solid fa-shoe-prints" className="shoes" />
          </a>
          <a href="#chalk">
            <h5>Chalk</h5>
          </a>
        </div>
        <a href="#equipment">
          <em>Back to top</em>
        </a>
      </div>
    </div>
  );
};

export default Equipment;

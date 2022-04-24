import React from "react";
import "./equipment.css";

const Equipment = () => {
  return (
    <div className="equipment">
      <div id="equipment" />
      <div className="block-1">
        <div className="box-1 title">
          <h1>
            Equipment
            <hr />
          </h1>
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

          <div className="row-1">
            <div className="column-1">
              <h5 id="shoes">Shoes</h5>
            </div>
            <div className="column-2">
              <p>
                You need shoes for both inside and outdoor climbing. Climbing shoes have a
                flat sole and a ridgid toe. There are varying intensities of shoe arches.
              </p>
            </div>
          </div>

          <div className="row-1">
            <div className="column-1">
              <h5 id="chalk">Chalk</h5>
            </div>
            <div className="column-2">
              <p>
                Powdered chalk is used to dry your hands. The chalk is stored in a chalk
                bag which straps to your waist so you can carry it with you on your climb
              </p>
            </div>
          </div>

          <div className="row-1">
            <div className="column-1">
              <h5 id="chalk">Crash Pad </h5>
            </div>
            <div className="column-2">
              <p>
                A crash pad is a pad or mat, placed below the route you are climbing to
                provide a softer place to land.
                <br />
                If climbing indoors, a crash pad is not needed as anywhere that is
                designated for bouldering will have permanent pads.
              </p>
            </div>
          </div>
          <div className="container-equip">
            <img
              src="https://i3.lensdump.com/i/tZrPj5.jpg"
              alt="tZrPj5.jpg"
              border="0"
              className="equip-img"
            />
            <img
              src="https://i.lensdump.com/i/tZrfqz.jpg"
              alt="tZrfqz.jpg"
              border="0"
              className="equip-img"
            />
            <img
              src="https://i1.lensdump.com/i/tZrFYT.jpg"
              alt="tZrFYT.jpg"
              border="0"
              className="equip-img"
            />
          </div>
        </div>
      </div>

      <div className="block-3">
        <div className="box-1">
          <h3>Top Rope</h3>

          <ul>
            <li>
              <a href="#shoes">
                <div className="item">Shoes</div>
                <div className="see">See description above.</div>
              </a>
            </li>
            <li>
              <a href="#chalk">
                <div className="item">Chalk</div>
                <div className="see">See description above.</div>
              </a>
            </li>
          </ul>

          <div className="row-1">
            <div className="column-1">
              <h5 id="harness">Harness</h5>
            </div>
            <div className="column-2">
              <p>
                Usually made primarily of Nylon but can be made of ot. A harness fits
                snugly around your waistline and around both legs.
              </p>
            </div>
          </div>

          <div className="row-1">
            <div className="column-1">
              <h5 id="belayer">Belayer or Auto Belay</h5>
            </div>
            <div className="column-2">
              <p>
                A belayer (second person) who will be your anchor on the ground. <br />
                An auto belay is a previously installed device that will auto catch a fall
                and lower a climber to the ground.
              </p>
            </div>
          </div>
          <div className="container-equip">
            <img
              src="https://i.lensdump.com/i/tZtdFv.jpg"
              alt="tZtdFv.jpg"
              border="0"
              className="equip-img"
            />
            <img
              src="https://i3.lensdump.com/i/tZt6Jm.jpg"
              alt="tZt6Jm.jpg"
              border="0"
              className="equip-img"
            />
          </div>
        </div>
      </div>

      <div className="block-4">
        <div className="box-1">
          <h3>Lead</h3>

          <ul>
            <li>
              <a href="#shoes">
                <div className="item">Shoes</div>
                <div className="see">See description above.</div>
              </a>
            </li>
            <li>
              <a href="#chalk">
                <div className="item">Chalk</div>
                <div className="see">See description above.</div>
              </a>
            </li>
            <li>
              <a href="#harness">
                <div className="item">Harness</div>
                <div className="see">See description above.</div>
              </a>
            </li>
            <li>
              <a href="#belayer">
                <div className="item">Belayer</div>
                <div className="see">See description above.</div>
              </a>
            </li>
            <li>
              <a href="#device">
                <div className="item">Belay Device</div>
                <div className="see">See description above.</div>
              </a>
            </li>
          </ul>

          <div className="row-1">
            <div className="column-1">
              <h5 id="rope">Rope</h5>
            </div>
            <div className="column-2">
              <p>
                You must bring and place your own rope as there are none left up. Unless
                you are top roping, you must use a dynamic rope.
              </p>
            </div>
          </div>

          <div className="row-1">
            <div className="column-1">
              <h5 id="quick-draws">Quick Draws</h5>
            </div>
            <div className="column-2">
              <p>
                Quick Draws will be placed at every anchor point on your route. Anchor
                points are already defined and 'bolted' into the route. Quick draws
                consist of two carabiner's connected by a dogbone.
              </p>
            </div>
          </div>

          <div className="row-1">
            <div className="column-1">
              <h5 id="helmet">Helmet</h5>
            </div>
            <div className="column-2">
              <p>
                The belayer should always have a helmet. If the belayer gets knocked out
                by falling debris, they could drop the climber. The climber should also
                have a helmet.
              </p>
            </div>
          </div>

          <div className="row-1">
            <div className="column-1">
              <h5 id="pas">Personal Anchor System (PAS)</h5>
            </div>
            <div className="column-2">
              <p>
                Nylon rigging designed to let you attach yourself to an anchor. Must also
                have a locking carabiner to use the PAS correctly.
              </p>
            </div>
          </div>
          <div className="container-equip">
            <img
              src="https://i3.lensdump.com/i/tZt6Jm.jpg"
              alt="tZt6Jm.jpg"
              border="0"
              className="equip-img"
            />
            <img
              src="https://i1.lensdump.com/i/tZtJxo.jpg"
              alt="tZtJxo.jpg"
              border="0"
              className="equip-img"
            />
            <img
              src="https://i2.lensdump.com/i/tZtVR9.jpg"
              alt="tZtVR9.jpg"
              border="0"
              className="equip-img"
            />
          </div>
        </div>
      </div>

      <div className="block-5">
        <div className="box-1">
          <h3>Trad</h3>

          <div>
            <ul className="trad-above">
              <li>
                <a href="#shoes">
                  <div className="item">Shoes</div>
                  <div className="see">See description above.</div>
                </a>
              </li>
              <li>
                <a href="#chalk">
                  <div className="item">Chalk</div>
                  <div className="see">See description above.</div>
                </a>
              </li>
              <li>
                <a href="#harness">
                  <div className="item">Harness</div>
                  <div className="see">See description above.</div>
                </a>
              </li>
              <li>
                <a href="#belayer">
                  <div className="item">Belayer</div>
                  <div className="see">See description above.</div>
                </a>
              </li>
              <li>
                <a href="#device">
                  <div className="item">Belay Device</div>
                  <div className="see">See description above.</div>
                </a>
              </li>
            </ul>
            <ul>
              <li className="new-row">
                <a href="#rope">
                  <div className="item">Rope</div>
                  <div className="see">See description above.</div>
                </a>
              </li>
              <li>
                <a href="#quick-draws">
                  <div className="item">Quick Draws</div>
                  <div className="see">See description above.</div>
                </a>
              </li>
              <li>
                <a href="#helmet">
                  <div className="item">Helmet</div>
                  <div className="see">See description above.</div>
                </a>
              </li>
              <li>
                <a href="#pas">
                  <div className="item">Personal Anchor System (PAS)</div>
                  <div className="see">See description above.</div>
                </a>
              </li>
            </ul>
          </div>

          <div className="row-1">
            <div className="column-1">
              <h5>Rack</h5>
            </div>
            <div className="column-2">
              <p>
                Multiple pieces of gear designed to place your own anchors. <br /> There
                are two main types of gear. Active and Passive. <br /> Active gear has
                moving parts that can expand and contract to fit a placement. <br />{" "}
                Passive gear has no moving parts and depends on the shape of the gear
                being appropriate to the placement.
              </p>
            </div>
          </div>
          <div className="container-equip">
            <img
              src="https://i2.lensdump.com/i/tZtYQQ.jpg"
              alt="tZtYQQ.jpg"
              border="0"
              className="equip-img"
            />
            <img
              src="https://i3.lensdump.com/i/tZt972.jpg"
              alt="tZt972.jpg"
              border="0"
              className="equip-img"
            />
          </div>
        </div>
      </div>

      <div className="block-6">
        <div className="box-1">
          <h3>Soloing</h3>
          <ul>
            <li>
              <a href="#shoes">
                <div className="item">Shoes</div>
                <div className="see">See description above.</div>
              </a>
            </li>
            <li>
              <a href="#chalk">
                <div className="item">Chalk</div>
                <div className="see">See description above.</div>
              </a>
            </li>
          </ul>
        </div>
        <a href="#equipment">
          <em>Back to top</em>
        </a>
      </div>
    </div>
  );
};

export default Equipment;

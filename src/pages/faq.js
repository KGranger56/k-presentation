import React from "react";
import "./faq.css";

const FAQ = () => {
  return (
    <div className="faq">
      <div className="block-1">
        <div className="box-1">
          <h1>
            Frequently Asked Questions
            <hr />
          </h1>
          <div className="question">
            <h3>How are Climbs rated</h3>
            <h5>Bouldering</h5>
            <p>
              The "V" scale, devised by John 'Vermin' Sherman at Hueco Tanks State
              Historic Site in the 1990s, is the most widely used system in North America.
              Although open-ended, the "V" system covers a range from V0 to V17. At the
              easier end of the scale, some use the designation "VB" (sometimes said to
              designate "basic" or "beginner") for problems easier than a V0. Particularly
              at the lower end of the scale, the grades are sometimes postfixed with "+"
              (harder) or "-" (easier) to further distinguish the difficulty range within
              a single grade. Next-wave ascents harder than the current set of top-end
              problems will hypothetically continue to increase numbers in the scale.
            </p>
            <h5>Top Rope, Lead, Sport/ Trad</h5>
            <p>
              The Yosemite Decimal System (YDS) is a three-part system used for rating the
              difficulty of walks, hikes, and climbs, primarily used by mountaineers in
              the United States and Canada. It was first devised by members of the Sierra
              Club in Southern California in the 1950s as a refinement of earlier systems,
              particularly those developed in Yosemite Valley, and quickly spread
              throughout North America. Class 5 is subdivided into parts, currently 5.0 to
              5.15.
              <br />
              Class 5 is considered technical roped free climbing; belaying is used for
              safety. Un-roped falls can result in severe injury or death. Class 5 has a
              range of sub-classes, ranging from 5.0 to 5.15d, to define progressively
              more difficult free moves.
            </p>
          </div>
          <div className="question">
            <h3>Common Terminology</h3>
            <div className="question-1">
              <div className="q-1">
                <h5>Send It!</h5>
                <p>An encouraging statement made to a climber.</p>
              </div>
              <div className="q-2">
                <h5>Flash</h5>
                <p>Completing a route on your first attempt.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

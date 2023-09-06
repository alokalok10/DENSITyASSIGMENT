import React from "react";
import logo from "../assets/ahead8.png";
import "../styles/Fourth.css";
import { motion } from "framer-motion";

const FourthSection = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <motion.div
            initial={{ x: -200, opacity: 0.1 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div id="div1">
              <p style={{ marginBottom: "-20px", marginTop: "40px" }}>
                {" "}
                Work with self improvement & how we are fixing it.
              </p>
              <span style={{ fontSize: "55px" }}>Self-Improvement.Ugh.</span>
              {/* <img
                src={logo}
                alt="ahead8"
                width={50}
                style={{ marginBottom: "-10px" }}
              /> */}
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 400, opacity: 0.1 }}
            whileInView={{ x: 10, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={logo}
              alt="ahead8"
              width={50}
              style={{ marginBottom: "-100px" }}
            />
          </motion.div>
        </div>
        <div style={{ width: "60%" }} id="div2">
          <ul>
            <li className="li">
              <h3 className="hover">Its not easy as 1-2-3</h3>
              <p className="hover span">
                The Journey of change may be long , but our sessions are short.
                We get to the point and tell you what you want to know( and
                nothing else).
              </p>
            </li>
            <li className="li">
              <h3 className="hover">Old habits are hard to break</h3>
              <p className="hover span">
                And bad behaviours die hard.Fortunately we give you great,
                science backed techniques to use.
              </p>
            </li>{" "}
            <li className="li">
              <h3 className="hover">
                You and your motivation don't have a long term motivation
              </h3>
              <p className="hover span">
                Luckily , we can proactively prepare you for the marathon,not
                just the race. Effective memorable exercises will help youstick
                to your goals.
              </p>{" "}
            </li>
            <li className="li">
              <h3 className="hover">
                Books just don't offer practical solutions
              </h3>
              <p className="hover span">
                Remember when you learn to ride a bike just by reading ? Yeah we
                don't either.
              </p>{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FourthSection;

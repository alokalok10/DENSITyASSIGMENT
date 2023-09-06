import React from "react";
import map from "../assets/map.png";
import mail from "../assets/message.png";
import appstore from "../assets/download-appstore.png";
import cmplogo from "../assets/ahead9.png";
import { motion } from "framer-motion";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <div
        style={{
          width: "90vw",
          height: "90vh",
        }}
      >
        <div style={{ width: "100%", height: "60%" }}>
          <div>
            <motion.div
              initial={{ x: -200, opacity: 0.1 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2>
                <h1
                  style={{
                    marginTop: "40px",
                    marginLeft: "20px",
                    fontSize: "50px",
                  }}
                >
                  Open vacancies
                </h1>
              </motion.h2>
            </motion.div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "-10px",
            }}
          >
            <div
              style={{
                width: "30%",
                padding: "20px 20px 40px 20px",
              }}
              className="jobdiv"
            >
              <h4>Senior Full-Stack Engineer</h4>
              <ul className="ulli">
                <li>
                  <p>Full-Time Position </p>
                </li>
                <li>
                  <p>Berlin or Remote</p>
                </li>
                <li>$65k-$85k , 0.5-1.5% equity share options</li>
              </ul>
              <button className="hover-button">See Details</button>
            </div>
            <div style={{ width: "30%", padding: "20px" }} className="jobdiv">
              <h4>Senior Designer</h4>
              <ul className="ulli">
                <li>
                  <p>Full-Time Position </p>
                </li>
                <li>
                  <p>Berlin or Remote</p>
                </li>
                <li>$40k-$55k , 0.5-1.5% equity share options</li>
              </ul>
              <button className="hover-button">See Details</button>
            </div>
            <div style={{ width: "30%", padding: "20px" }} className="jobdiv">
              <h4>Superstar Intern</h4>
              <ul className="ulli">
                <li>
                  <p>Full-Time Position </p>
                </li>
                <li>
                  <p>Berlin or Remote</p>
                </li>
                <li>$20k-$24k , 0.5-1.5% equity share options</li>
              </ul>
              <button className="hover-button">See Details</button>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid lightgrey",
            width: "100%",
            height: "40%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <img
              src={cmplogo}
              width={"60px"}
              alt="applogo"
              style={{ marginBottom: "-30px" }}
            />
          </div>
          <div style={{ marginBottom: "-20px" }}>
            <h3 style={{ color: "purple" }}>
              <b>ahead</b>
            </h3>
          </div>
          <div>
            <img
              src={map}
              alt="map"
              width={"25px"}
              style={{
                marginBottom: "-3px",
                marginLeft: "-100px",
                marginRight: "5px",
              }}
            />
            <span style={{ marginRight: "50px", fontSize: "20px" }}>
              AuguststaBe 26 , 10117 Berlin
            </span>{" "}
            <img
              src={mail}
              alt="mail"
              width={"25px"}
              style={{ marginBottom: "-3px" }}
            />
            <span style={{ marginLeft: "5px", fontSize: "20px" }}>
              hi@ahead-app.com
            </span>
          </div>
          <div style={{ marginBottom: "-20px" }}>
            <img src={appstore} width={"100px"} alt="applogo" />
          </div>
          <div>
            <p style={{ marginTop: "10px", fontSize: "20px" }}>
              @2022 Ahead app. All right reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

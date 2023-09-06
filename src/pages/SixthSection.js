import React from "react";

const SixthSection = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#edf6fa",
        }}
      >
        <div style={{ textAlign: "center" }}>
          Let your friends , family and coworkers (Anonymously) rate your social
          skills.
        </div>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontWeight: "bold", fontSize: "60px" }}>
            Ever wondered what others think of you ?
          </h1>
        </div>
        <div></div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div style={{ textAlign: "start", width: "20%", fontSize: "18px" }}>
            Answer questions on social skill
          </div>
          <div style={{ textAlign: "start", width: "20%", fontSize: "18px" }}>
            let others anonymously answer questions about you
          </div>
          <div style={{ textAlign: "start", width: "20%", fontSize: "18px" }}>
            {" "}
            Find out where you and others see things the same way - and where
            not
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default SixthSection;

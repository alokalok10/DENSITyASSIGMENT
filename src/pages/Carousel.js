import React from "react";
import "../styles/Carousel.css";
// import Lottie from "lottie-react";
// import jellyAnimation from "../assets/jelly-spin.json";
import Card from "./Card";
import { motion } from "framer-motion";
import logo from "../assets/ahead3.png";

function Carousel() {
  const cardsData = [
    {
      title: "You quabble with your partner",
      description:
        "You engage in petty arguments, prioritizing winning over understanding and connection.",
      // color:"#FFD8D8",
      color: "#D9F2FF",
      emoji: "👫",
      // color:"#FAF4B7",
    },
    {
      title: "You argue with a colleague",
      description:
        "You get angry and defensive, instead of staying open and working towardscommon ground.",
      color: "#EEECFE",
      emoji: "😠",
    },
    {
      title: "You get a promotion at work",
      description:
        "You question yourself and wonder when they’ll realize you’re an unqualified imposter, instead of trusting yourself & your abilities.",
      color: "#7358FF",
      emoji: "😳",
    },
    {
      title: "You attend a class reunion",
      description:
        "You feel anxious about reconnecting, worrying if you'll measure up to others' success.",
      color: "#FEEFD5",
      emoji: "🤨",
    },
    {
      title: "You start a new hobby",
      description:
        "You feel intimidated by the learning process, doubting your skills and fearing failure.",
      color: "#C5F2D9",
      emoji: "🤔",
      // color:"#7FB77E",
    },
    {
      title: "You receive negative feedback",
      description:
        "You become defensive and question your competence, struggling to accept criticism constructively.",
      color: "#FAC4C4",
      emoji: "😖",
    },
    {
      title: "You are at a lively dinner party",
      description:
        "You play on your phone instead of confidently approaching strangers and striking up a chat.",
      color: "#F6DEBF",
      emoji: "😬",
    },
    {
      title: "You hit dead end in a negotiation",
      description:
        "You get nervous, frazzled, and frustated instead of staying optimistic and solution-oriented.",
      color: "#F5D1F5",
      emoji: "😫",
    },
  ];
  return (
    <div className="main-container">
      <div className="section-one">
        <div className="one">
          <h2>EQ beats IQ</h2>
        </div>
        <div className="two">
          People with high emotional <br />
          intelligence(EQ) live more fulfilled <br />
          lives. They tend to be happier and <br /> have healthier
          relationships.
        </div>
        <div className="three">
          They are more successful in their <br /> pursuits and make for
          inspiring <br />
          leaders. According to science, they <br /> earn $29k a year{" "}
        </div>
      </div>
      <div className="section-two">
        <div className="text-logo">
          <h1 style={{ fontSize: "50px" }}>
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Does this sound familiar...
            </motion.div>
          </h1>

          {/* <Lottie
              style={{ width: "90px", height: "90px" }}
              animationData={jellyAnimation}
              loop={true}

            /> */}

          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={logo} alt="Logo" className="llogo" />
          </motion.div>
        </div>
        <div className="cards-container">
          <motion.div
            className="carousel"
            initial={{ x: -200, opacity: 0.1 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {cardsData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                color={
                  card.title === "You get a promotion at work"
                    ? "#6441EF"
                    : card.color
                }
                emoji={
                  card.title === "You get a promotion at work"
                    ? "😳"
                    : card.emoji
                }
                transform={
                  card.title === "You get a promotion at work"
                    ? "rotate(-6deg)"
                    : ""
                }
                textColor={
                  card.title === "You get a promotion at work" ? "white" : ""
                }
                z-Index={
                  card.title === "You get a promotion at work" ? "1" : ""
                }
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default Carousel;

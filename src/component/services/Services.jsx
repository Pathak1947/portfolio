import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>INTRODUCTION</h2>
          <p>"Hello,</p>
          <p>
            I'm Prasahnt Pathak, a recent graduate with a degree in B.Tech. Though
            I'm a newcomer, my studies have equipped me with a solid foundation
            in Front-end. Eager to contribute my skills and continue learning in
            the ever-evolving world of web development."
          </p>
          <button>
            <a href="">
              RESUME
            </a>
          </button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>SKILLS</h2>
          <ol>
            <li>
              <p>
                <img src="/html.png" alt="HTML" />{" "}
                <span style={{ fontWeight: "bold", color: "#ff4c1e" }}>
                  HTML
                </span>{" "}
                : Creates the structure of websites using HTML for a strong
                foundation.
              </p>
            </li>
            <li>
              <img src="/css.png" alt="CSS" />{" "}
              <span style={{ fontWeight: "bold", color: "skyblue" }}>CSS</span>{" "}
              : Designs visually appealing and responsive web pages with CSS .
            </li>
            <li>
              <img src="/js.png" alt="JavaScript" />{" "}
              <span style={{ fontWeight: "bold", color: "yellow" }}>
                JavaScript
              </span>{" "}
              : Uses JS to add dynamic and interactive features to websites.
            </li>
            <li>
              <img src="/react.png" alt="ReactJs" />{" "}
              <span style={{ fontWeight: "bold", color: "#00d2d7" }}>
                ReactJs
              </span>{" "}
              : Builds modern and user-friendly interfaces with React.
            </li>
            <li>
              <img src="/git.png" alt="Git" />{" "}
              <span style={{ fontWeight: "bold", color: "#cc4342" }}>Git</span>{" "}
              : Manages and tracks code changes efficiently with Git for
              collaborative development.
            </li>
            <li>
              <img src="/node.jfif" alt="node" />{" "}
              <span style={{ fontWeight: "bold", color: "#00d2d7" }}>NodeJS</span>{" "}
              : responsible for handling all backend request.
            </li>
          </ol>
          <button>
            <a href="https://github.com/Pathak1947">GitHub</a>
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;

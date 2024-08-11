import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Wallet-app",
    img: "paytm.png",
    desc: "wallet-app is an innovative digital wallet application designed to simplify and secure online transactions. Inspired by the success of platforms like Paytm, our solution offers users a seamless way to manage their finances, make payments, and transfer money with just a few taps.",
    link: "https://github.com/Pathak1947/WALLET-APP",
  },
  {
    id: 1,
    title: "Food-delivery",
    img: "food-delivery.png",
    desc: "food-delivery is a streamlined, single-page website designed to showcase an innovative concept for food delivery services. This project serves as a prototype to demonstrate the efficiency and user-friendly nature of our proposed solution.",
    link: "https://pathak1947.github.io/food-delivery/",
  },
  {
    id: 2,
    title: "Budget-app",
    img: "budget.png",
    link: "https://github.com/Pathak1947/budget-app",
    desc: "budget-app is an intuitive budget management application designed to help users take control of their finances with ease. Whether you're tracking daily expenses or planning long-term financial goals, our app provides the tools and insights needed to manage your budget effectively.",
  },
 
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link}>
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

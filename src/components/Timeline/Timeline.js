import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.scss";
import scratchScreenshot from '../../assets/images/scratch_screenshot_1.png';

const timelineData = [
  {
    year: "2016",
    image: scratchScreenshot,
    description: "Gained understanding of programming through Scratch ",
  },
  {
    year: "2018",
    image: "/images/2020.jpg",
    description: "Learned first programming language, Java",
  },
  {
    year: "2020",
    image: "/images/2022.jpg",
    description: "Continued education with advanced concepts in Java",
  },
  {
    year: "2021",
    image: "/images/2024.jpg",
    description: "Attended NJIT, ",
  },
];

const Timeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % timelineData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? timelineData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="timeline-box-wrapper">
  <button className="arrow up" onClick={handlePrev}>▲</button>

  <div className="timeline-wrapper">
    <div className="timeline-content">
      <AnimatePresence mode="wait">
        <motion.div
          key={timelineData[currentIndex].year}
          className="timeline-box"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={timelineData[currentIndex].image}
            alt={timelineData[currentIndex].year}
            className="timeline-image"
          />
        </motion.div>
      </AnimatePresence>

      <div className="timeline-caption">
        <h2>{timelineData[currentIndex].year}</h2>
        <p>{timelineData[currentIndex].description}</p>
      </div>
    </div>
  </div>

  <button className="arrow down" onClick={handleNext}>▼</button>
</div>

  );
};

export default Timeline;

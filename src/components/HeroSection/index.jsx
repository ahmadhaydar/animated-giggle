import React from "react";
import { motion } from "framer-motion";
import blob from "../../assets/blob.svg";
import blob1 from "../../assets/blob1.svg";

export const HeroSection = ({...props}) => {
  return (
    <div className="hero min-h-screen max-w-screen overflow-x-hidden overflow-y-hidden relative" {...props}>
      <img
        src={blob}
        alt="blob"
        className="absolute hidden md:block"
        style={{
          width: "40rem",
          top: "-15rem",
          left: "-15rem",
        }}
      />
      <img
        src={blob1}
        alt="blob1"
        className="absolute hidden md:block"
        style={{
          width: "80rem",
          bottom: "-59rem",
          right: "-20rem",
        }}
      />
      <div className="hero-content text-center">
        <div className="max-w-md lg:max-w-2xl">
          <motion.h1
            className="text-5xl lg:text-8xl font-bold"
            initial={{ opacity: 0, y: 50 }} // Set initial properties for the animation
            animate={{ opacity: 1, y: 0 }} // Set properties to animate to
            transition={{ delay: 0.2, duration: 1, type: "spring" }}
          >
            Evelvate your business
          </motion.h1>
          <motion.p
            className="py-6 lg:text-xl"
            initial={{ opacity: 0, y: 50 }} // Set initial properties for the animation
            animate={{ opacity: 1, y: 0 }} // Set properties to animate to
            transition={{ delay: 0.4, duration: 1, type: "spring" }}
          >
            Our cutting-edge startup proudly presents an innovative ERP website
            tailored to meet all your business needs.
          </motion.p>
          <motion.div
            className="flex justify-center gap-3"
            initial={{ opacity: 0, y: 50 }} // Set initial properties for the animation
            animate={{ opacity: 1, y: 0 }} // Set properties to animate to
            transition={{ delay: 0.6, duration: 1, type: "spring" }}
          >
            <motion.button className="btn btn-primary">
              Get Started
            </motion.button>
            <motion.button className="btn btn-outline">
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

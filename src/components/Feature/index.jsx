import React from "react";
import { motion } from "framer-motion";

export const Feature = ({
  imageSrc,
  buzzword,
  restTitle,
  isReverse = false,
  children,
  className,
}) => {
  return (
    <div className={`hero ${className}`}>
      <div
        className={`hero-content flex-col max-w-5xl gap-8 ${
          isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } my-12 px-5`}
      >
        <motion.img
          src={imageSrc}
          className="max-w-xs"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 1,
            type: "spring",
          }}
        />
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 1,
            type: "spring",
          }}
        >
          <h1 className="text-3xl font-bold">
            <span className="text-primary">{buzzword}</span> {restTitle}
          </h1>
          <p className="py-6">{children}</p>
          <button className="btn btn-primary">Get Started</button>
        </motion.div>
      </div>
    </div>
  );
};

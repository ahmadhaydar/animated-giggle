import React from "react";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import alldata from "./assets/alldata.svg";
import realtime from "./assets/realtime.svg";
import { Feature } from "./components/Feature";
import { Companies } from "./components/Companies/Companies";
import { motion } from "framer-motion";

export default function App() {
  const tier1Features = [
    "Record incoming goods",
    "Record outgoing goods",
    "Record profit results",
  ];

  const tier2Features = [
    "Record incoming and outgoing goods",
    "Record profits",
    "Analyze sales results with charts",
    "24/7 Support",
  ];

  const tier3Features = [
    "Record incoming and outgoing goods",
    "Record profits",
    "Analyze sales results with charts",
    "24/7 Support",
    "Export data to Excel",
    "AI Income Prediction",
  ];
  return (
    <>
      <Navbar />
      <HeroSection id="about"/>
      <Companies />
      <h3 className="text-3xl font-bold text-center lg:text-5xl mt-24 mb-12">
        What makes us different?
      </h3>
      <Feature
        buzzword="Simplify"
        restTitle="your usual workflow"
        imageSrc={alldata}
      >
        Our ERP system integrates all your business processes into one cohesive
        platform. From finance and sales to inventory and HR, experience the
        ease of managing everything in a unified system.
      </Feature>
      <Feature
        buzzword="Real-time"
        restTitle="Data Insights"
        imageSrc={realtime}
        isReverse
      >
        Make informed decisions on-the-go with real-time analytics. Gain
        valuable insights into your business performance, identify trends, and
        respond swiftly to changing market dynamics.
      </Feature>
      <h3 className="text-3xl font-bold text-center lg:text-5xl mt-24 mb-8" id="pricing">
        Ready to elevate your business?
      </h3>
      <p className="text-center lg:text-xl mb-12">
        Choose from our flexible pricing plans for businesses of all sizes.
      </p>
      <div className="flex flex-col justify-center w-full p-5">
        <div className="flex flex-col md:flex-row justify-center gap-3 mb-24 mx-auto w-full md:max-w-5xl">
          <PricingCard
            title="Basic"
            price="19/month"
            features={tier1Features}
            order={1}
          />
          <PricingCard
            title="Business"
            price="49/month"
            features={tier2Features}
            order={2}
          />
          <PricingCard
            title="Entrepreneur"
            price="99/month"
            features={tier3Features}
            order={3}
          />
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200" id="contact">
        <div className="hero-content flex-col max-w-5xl gap-8">
          <div className="text-center">
            <h1 className="text-3xl lg:text-5xl font-bold">Get in touch with us!</h1>
            <p className="py-6 lg:text-xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer p-10 bg-primary text-primary-content">
        <div>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </>
  );
}

const PricingCard = ({ title, price, features, className, order }) => {
  return (
    <motion.div
      className={`flex flex-col p-6 bg-base-100 md:w-1/3 rounded-lg shadow-md ${className}`}
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.2 * order,
        duration: 1,
        type: "spring",
      }}
    >
      <div className="text-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-4 text-gray-600">Ideal for small projects</p>
      </div>
      <div className="mt-6">
        <p className="text-gray-600">Price per month</p>
        <p className="text-2xl font-semibold">${price}</p>
      </div>
      <ul className="mt-6 space-y-4">
        {features.map((feature, index) => (
          <li className="flex items-center" key={index}>
            <svg
              className="w-4 h-4 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="flex-1" />
      <div className="mt-6">
        <a href="#" className="btn btn-primary w-full">
          Get Started
        </a>
      </div>
    </motion.div>
  );
};

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 32) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className={`navbar fixed top-0 z-50 ${
        scrolling ? "bg-base-200" : ""
      } transition-colors`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring" }}
    >
      <div className="flex-1">
        <a
          className={`btn btn-ghost normal-case text-xl ${
            scrolling ? "" : "md:text-white"
          }`}
        >
          # AcmeStartup
        </a>
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="font-bold" href="#about">About</a>
          </li>
          <li>
            <a className="font-bold" href="#pricing">Pricing</a>
          </li>
          <li>
            <a className="font-bold" href="#contact">Contact</a>
          </li>
        </ul>
        <button
          className="btn btn-outline btn-primary ml-3"
          onClick={() => window.my_modal_1.showModal()}
        >
          Login
        </button>
      </div>
      {/* Open the modal using ID.showModal() method */}
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Login</h3>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
            />
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Type here"
              class="input input-bordered w-full"
            />
          </div>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-error btn-outline">Cancel</button>
            <button className="btn btn-primary">Log In</button>
          </div>
        </form>
      </dialog>
    </motion.div>
  );
};

import React, { useEffect } from "react";
import { FaArrowLeft } from "../assets/icons";
import { NavLink } from "react-router-dom";
import { Bill } from "../assets";
import { Header } from "../components";
import { motion } from "framer-motion";
import { buttonClcik } from "../animations";
import { useSelector } from "react-redux";

const CheckoutSuccess = () => {
  return (
    <main className=" w-screen min-h-screen flex items-center justify-start flex-col">
      <Header />
      <div className="w-full flex flex-col items-center justify-center mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24">
        <img src={Bill} className="w-full md:w-656" alt="" />

        <h1 className="text-[50px] text-headingColor font-bold">
          Amount paid Successfully
        </h1>

        <motion.div {...buttonClcik}>
          <NavLink
            to={"/"}
            className="flex items-center justify-center gap-4 cursor-pointer text-2xl text-textColor font-semibold px-4 py-2 rounded-md border border-gray-300 hover:shadow-md"
          >
            <FaArrowLeft className="text-3xl text-textColor " /> Get back to
            Home
          </NavLink>
        </motion.div>
      </div>
    </main>
  );
};

export default CheckoutSuccess;

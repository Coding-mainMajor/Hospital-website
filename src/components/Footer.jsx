import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className=" flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-shadow-amber-600">
        {/* -----left section------ */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At id animi
            voluptates amet nemo, ipsam, quisquam sint itaque suscipit sapiente
            fuga delectus libero similique? Inventore minima blanditiis maiores
            aliquid enim!
          </p>
        </div>
        {/* -----centre section------ */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* -----right section------ */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+234-815-278-1082</li>
            <li>francisiyke100@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* ------copyright text------ */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          copyright 2025@ Prescripto - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

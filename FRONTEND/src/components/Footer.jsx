import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div class="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Welcome to Forever – your ultimate destination for timeless fashion!
            At Forever, we believe in offering styles that never go out of
            trend. Our collection features a curated selection of elegant
            dresses,ensuring you always find the perfect outfit for every
            occasion.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium">Company</p>
          <ul className="flex flex-col gap1 text-gray-600">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Delivery</li>
            <li className="cursor-pointer">Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Get in touch</p>
          <ul className="flex flex-col gap1 text-gray-600">
            <li className="cursor-pointer">+1 225 2255 213</li>
            <li className="cursor-pointer">forever@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="py-5 text-sm text-center">
        Copyright 2024© forever.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;

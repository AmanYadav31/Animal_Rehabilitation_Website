import React from "react";
import { Link } from "react-router-dom";
import {
  cat_1,
  dog_1,
  dog_2
} from "../../../assets/images";
import Image from "../../designLayouts/Image";
import ShopNow from "../../designLayouts/buttons/ShopNow";

const Sale = () => {
  return (
    <div className="py-10 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-20">
      {/* Left Section */}
      <div className="bg-gray-100 rounded-xl w-full md:w-2/3 lg:w-2/5 flex flex-col justify-center items-center text-gray-800 p-6 md:p-8 lg:p-10">
        <div className="aspect-w-4 aspect-h-3 w-full mb-6">
          <Image className="h-full w-full object-cover rounded-lg" imgSrc={cat_1} />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Visit Our Center
          </h2>
          <p className="text-base md:text-lg lg:text-xl mb-4 md:mb-6">
            Get up to{" "}
            <span className="text-lg md:text-xl lg:text-2xl font-bold text-indigo-600">
              30% OFF
            </span>{" "}
            on Booking Now
          </p>
          <div>
            <ShopNow />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 w-full md:w-2/3 lg:w-3/5">
        <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
          <Link to="/shop">
            <Image className="h-full w-full object-cover rounded-lg hover:shadow-xl transition-shadow duration-300" imgSrc={dog_1} />
          </Link>
        </div>
        <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
          <Link to="/shop">
            <Image className="h-full w-full object-cover rounded-lg hover:shadow-xl transition-shadow duration-300" imgSrc={dog_2} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;

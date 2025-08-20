import React from "react";

export interface IPricingCard {
  cost: string;
  title: string;
  desc: string;
}

const PricingCard = ({ cost, title, desc }: IPricingCard) => {
  return (
    <article className='bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center'>
      <h4 className='text-2xl font-semibold text-gray-700 mb-2'>{title}</h4>
      <p className='text-sm text-gray-500 mb-6'>{desc}</p>
      <div className='flex items-end mb-6'>
        <span className='text-5xl font-extrabold text-[#2F70AF]'>
          {cost}
        </span>
        <span className='text-xl text-gray-400'>/month</span>
      </div>
      <button className='mt-auto cursor-pointer bg-[#2F70AF] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300'>
        Get Started
      </button>
    </article>
  );
};

export default PricingCard;
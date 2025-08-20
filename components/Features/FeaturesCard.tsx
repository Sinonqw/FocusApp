import React from 'react'

interface IFeaturesCard {
  title: string
  description: string
  number: number
}

const FeaturesCard = ({ title, description, number }:IFeaturesCard) => {
  return (
    <div className='flex flex-col items-center p-6 md:p-8 text-black bg-white rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
        <div className='w-16 h-16 mb-4 bg-amber-400 rounded-full flex items-center justify-center text-3xl font-bold'>
            {number}
        </div>
        <h4 className='text-xl font-semibold text-gray-800 mb-2 text-center'>{title}</h4>
        <p className='text-base text-gray-600 text-center'>
            {description}
        </p>
    </div>
  )
}

export default FeaturesCard
import React from 'react'
import Image from 'next/image'
import Title from './utils/Title'
import Subtitle from './utils/Subtitle'
import Button from './utils/Button'
import Desc from './utils/Desc'

const Hero = () => {
  return (
    <section id='home' className='hero-section'>
      <div className='hero-section__row'>
        {/* Left Column */}
        <div className='hero-section__left'>
          <Title>TITLE</Title>
          <Subtitle variant='white'>SUBTITLE</Subtitle>
          <Button variant='secondary'>GET STARTED</Button>
        </div>

        {/* Right Column */}
        <div className=' hero-section__right' >
          <Subtitle variant='white'>WHY ME?</Subtitle>
          <Image
            alt='photo'
            src={'/photo.jpeg'}
            width={200}
            height={300}
            className='rounded-lg shadow-md'
          />
          <Desc variant='white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci reprehenderit, at sequi voluptatem impedit, inventore ratione aperiam dolorum odio fugit placeat earum asperiores repudiandae? Impedit mollitia repudiandae aliquid tempora consequatur.</Desc>
        </div>
      </div>
    </section>
  )
}

export default Hero
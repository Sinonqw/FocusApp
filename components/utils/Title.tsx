import React, { ReactNode } from 'react'

const Title = ({children}:{children: ReactNode}) => {
  return (
    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>{children}</h1>
  )
}

export default Title
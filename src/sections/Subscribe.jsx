import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return (
    <div>
      <section className='max-container flex flex-col justify-between items-center max-lg:flex-col gap-10' id="contact-us">
        <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>Sign Up for<span className='text-coral-red'> Updates </span>
        </h3>
        <div className='w-[80%] flex items-center max-sm:flex-col gap-2.5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
          <input type="text"
          placeholder='subscribe@nike.com'
          className='input' />
          <div className='flex max-sm:justify-center max-sm:w-full'>
            <Button label="Sign Up" fullWidth></Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Subscribe

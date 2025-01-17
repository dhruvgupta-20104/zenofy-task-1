import React from 'react'
import image from '../assets/about.jpg'

const About = () => {
  return (
    <div id="about" className="relative h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="hidden sm:block absolute top-0 right-0 w-[50%] h-full bg-primary/60 items-center ">
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 sm:pt-10'>
            {/* text section */}
            <div className='flex flex-col items-center justify-around sm:justify-center gap-2 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-2 relative z-10'>
                <h1 data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold">About Us</h1>
                <p  data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-md p-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, molestiae! Qui facere cupiditate aliquid iste fugiat perspiciatis quod quas saepe corporis dolor, exercitationem corrupti iure distinctio fuga repellendus, soluta nihil! </p>
                </div>
                {/* image section */}
                <div className="flex justify-center">
                    <div className="relative w-[200px] h-[200px] sm:w-[450px] sm:h-[450px]">
                        <div className="absolute inset-0 border-8 border-primary/50 rounded-xl p-1 sm:p-2">
                        <img
                            src={image}
                            alt="Group photo"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                        </div>
                    </div>
                </div>
        </div>

    </div>

  )
}

export default About

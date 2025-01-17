import React from 'react'
import HabbitImage from '../assets/Hero/habbits.jpg'
import HealthImage from '../assets/Hero/health.webp'
import ClimateImage from '../assets/Hero/climate.jpeg'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Slides = [
  {
    id: 1,
    title: 'Habbits & AI',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, similique veritatis. Sed ducimus ratione est voluptatum corrupti accusamus sequi eum porro optio amet, aliquid numquam nesciunt eos voluptas. Ratione, eius!',
    image: HabbitImage
  },
  {
    id: 2,
    title: 'Health & AI',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, similique veritatis. Sed ducimus ratione est voluptatum corrupti accusamus sequi eum porro optio amet, aliquid numquam nesciunt eos voluptas. Ratione, eius!',
    image: HealthImage
  },
  {
    id: 3,
    title: 'Climate & AI',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, similique veritatis. Sed ducimus ratione est voluptatum corrupti accusamus sequi eum porro optio amet, aliquid numquam nesciunt eos voluptas. Ratione, eius!',
    image: ClimateImage
  }
]

const Hero = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div id="hero" className='relative h-screen overflow-hidden min-h-[520px] sm:min-h-[520px] bg-gray-100 flex justify-center items-center'>
      <div className='h-[450px] w-[450px] sm:h-[750px] sm:w-[750px] bg-primary/60 absolute -top-1/2 right-0 rounded-3xl rotate-45 z-9'>
      </div>
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
            {
              Slides.map((slide) => {
                return (
                  <div key={slide.id}>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                      {/* text section */}
                      <div className='flex flex-col items-center justify-around sm:justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                        <h1 data-aos="zoom-out"
                            data-aos-duration="500"
                            data-aos-once="true"
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold">{slide.title}</h1>
                        <p  data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="100"
                            className="text-sm">{slide.description}</p>
                      </div>
                      {/* image section */}
                      <div className="order-1 sm:order-2">
                        <div
                          data-aos="zoom-in"
                          data-aos-once="true"
                          className="relative z-10"
                        >
                          <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )
            })
          }
        </Slider>
      </div>
    </div>
  )
}

export default Hero

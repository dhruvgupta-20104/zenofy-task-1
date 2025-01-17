import React from 'react'
import habbitImage from '../assets/Hero/habbits.jpg'
import healthImage from '../assets/Hero/health.webp'
import climateImage from '../assets/Hero/climate.jpeg'
import Panel from './Panel'

const habbitProducts =[
  {
    title: "Habits Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,",
    id: 1,
    image: habbitImage
  }, 
  {
    title: "Habits Product 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,",
    id: 2,
    image: habbitImage
  }, 
  {
    title: "Habits Product 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,",
    id: 3,
    image: habbitImage
  },{
    title: "Habits Product 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,",
    id: 4,
    image: habbitImage
  }
]

const climateProducts = [
  {
    title: "Climate Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,",
    id: 5,
    image: climateImage
  },
  {
    title: "Climate Product 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,",
    id: 6,
    image: climateImage
  }
]

const healthProducts = [
  {
    title: "Health Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,",
    id: 8,
    image: healthImage
  },
  {
    title: "Health Product 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,",
    id: 9,
    image: healthImage
  },
  {
    title: "Health Product 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,",
    id: 10,
    image: healthImage
  }
]

const Services = () => {

  return (
    <div id="services" className="min-h-screen flex flex-col items-center justify-center">
      <div className="h-[10vh]"></div>
      
      <div className="relative flex h-[30vh] w-full items-center bg-gray-100 overflow-hidden" >
        <Panel key="1" productList={habbitProducts} title="Habits & AI" image={habbitImage} scrollSectionPosition="left" titlePosition="right" />
      </div>

      <div className="flex h-[30vh] w-full items-center justify-center bg-primary/40 overflow-hidden">
        <Panel key="2" productList={climateProducts} title="Climate & AI" image={climateImage} scrollSectionPosition="right" titlePosition="left" />
      </div>

      <div className="flex h-[30vh] w-full items-center justify-center bg-gray-100 overflow-hidden">
        <Panel key="3" productList={healthProducts} title="Health & AI" image={healthImage} scrollSectionPosition="left" titlePosition="right" />
      </div>
    </div>
  )
}

export default Services
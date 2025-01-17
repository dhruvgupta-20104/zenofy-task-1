import React, {useRef} from 'react'
import ProductCard from './ProductCard'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const Panel = (props) => {
    const scrollContainerRef = useRef(null);

    function scrollLeft() {
        scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }

    function scrollRight() {
        scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }

  return (
    
    <div className='flex items-center w-full h-[30vh]'>
      <div className="flex items-center w-[100%]">
          <button 
            onClick={scrollLeft} 
            className="relative left-5 top-1/2  z-10 p-2 bg-primary text-white rounded-full shadow-md hover:bg-primary/80"
          >
            <IoIosArrowBack className="text-2xl" />
          </button>
          <div
            ref={scrollContainerRef}
            className="flex gap-5 items-center justify-evenly w-full overflow-hidden scroll-smooth px-12"
            style={{ scrollbarWidth: 'none' }}
          >
            {props.productList.map((product) => (
              <ProductCard key={product.id} description={product.description} title={product.title} image={product.image} />
            ))}
          </div>

          <button 
            onClick={scrollRight} 
            className="relative right-5 top-1/2 z-10 p-2 bg-primary text-white rounded-full shadow-md hover:bg-primary/80"
          >
            <IoIosArrowForward className="text-2xl" />
          </button>
        </div>
      </div>
  )
}

export default Panel

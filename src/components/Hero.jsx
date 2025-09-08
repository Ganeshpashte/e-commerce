import React from 'react'

const Hero = () => {
  return (
    <section className="text-gray-600 body-font mt-20">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Where Shopping
              <br className="hidden lg:inline-block" />
              Meets Convenience.
            </h1>
            <p className="mb-8 leading-relaxed">
              Shopping isn’t just about choices, it’s about comfort. Our platform brings you endless products, seamless navigation, and quick doorstep delivery — where style, quality, and affordability truly meet convenience.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                Explore
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Categories
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://static.vecteezy.com/system/resources/thumbnails/010/974/057/small_2x/online-shopping-3d-illustration-shopping-online-store-for-sale-mobile-e-commerce-3d-background-buying-and-selling-concept-png.png"
            />
          </div>
        </div>
      </section>
  )
}

export default Hero
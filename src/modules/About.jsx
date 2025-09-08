import React from 'react'
import { Category } from './Category'

const About = () => {
  return (
    <>
      <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
          {Array.from({ length: 2}).map((_, i) => (
            <div key={i}>
              <h2 className="text-xl font-semibold ">How do I place an order on Ecomm?</h2>
              <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                Placing an order is easy! Browse your favorite products, add them to your cart, and proceed to checkout. Enter your shipping details, choose a payment method, and confirm your purchase. Your order will be on its way in no time.
              </p>
            </div>
          ))}
        </div>
           <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
          {Array.from({ length: 2}).map((_, i) => (
            <div key={i}>
              <h2 className="text-xl font-semibold ">What payment options are available?</h2>
              <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                Ecomm Websure offers multiple secure payment methods including credit/debit cards, UPI, net banking, and popular digital wallets. All transactions are encrypted for your safety.
              </p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-gray-600">
          Can&apos;t find what you&apos;re looking for?{' '}
          <a href="#" title="" className="black font-semibold hover:underline">
            Contact us
          </a>
        </p>
      </div>
    </section>
    <Category />
    </>
  )
}

export default About
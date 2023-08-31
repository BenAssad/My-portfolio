import React from 'react'
import htmlcss from "../assets/htmcss.jpg";
import js from "../assets/js.jpg";
import react1 from "../assets/react1.jpg";
import Symfony from "../assets/Symfony.jpg";
import php from "../assets/php.jpg";
import nodejs from "../assets/nodejs.jpg";

function Portfolio() {

    const Portfolios =[
        {
          id: 1,
          src: htmlcss
        },
        {
          id: 2,
          src: js
        },
        {
          id: 3,
          src: react1
        },
        {
          id: 4,
          src: Symfony
        },
        {
          id: 5,
          src: php
        },
        {
          id: 6,
          src: nodejs
        }
      ]

  return (
    
    <div name='protfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

          <div className='pb-8'>

            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check out some of my work right here</p>
          </div>

              
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

          {
            Portfolios.map(({id, src})=>(
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt=""  className='rounded-md duration-200 hover:scale-105 w-full'/>
              <div className='flex items-center justify-center h-10'>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
              </div>
            </div>
                ))
          }

              
          </div>

        </div>

    </div>
  )
}

export default Portfolio
import React from 'react'
import htmlex from "../assets/htmlex.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import symfony from "../assets/symfony.png";
import laravel from "../assets/laravel.jpg";
import react from "../assets/react.png";

function Experience() {

    const techs = [
        {
            id :1 ,
            src : htmlex,
            title : 'HTML',
            className : 'shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500'
        },
        {
            id : 2 ,
            src : css,
            title : 'CSS',
            className : 'shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500'
        },
        {
            id : 3 ,
            src : js,
            title : 'Javascript',
            className : 'shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500'
        },
        {
            id : 4 ,
            src : react,
            title : 'React',
            className : 'shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600'
        },
        {
            id : 5 ,
            src : symfony,
            title : 'Symfony',
            className : 'shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500'
        },
        {
            id : 6 ,
            src : laravel,
            title : 'Laravel',
            className : 'shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-red-500'
        },
    ]

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {techs.map(({id, src, title, className})=>(
                    <div key={id} className={className}>
                        <img src={src} alt=""  className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Experience
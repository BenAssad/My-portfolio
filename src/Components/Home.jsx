import React from 'react'
import Profil from "../assets/profil.jpg";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
       
       <div className='max-w-screnn-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

            <div className='flex flex-col justifier-center h-1'>

                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Full Stack Developper
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa mollitia odit hic a alias sint iste quasi corrupti, placeat enim. Fuga est vel eligendi placeat voluptatibus reiciendis error incidunt dolores?
                </p>
                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={30} className='ml-1'/>
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img src={Profil} alt="Profil Image" className='rounded-2xl max-auto w-2/3 h-60 md:w-full '/>
            </div>

        </div>

    </div>
  )
}

export default Home
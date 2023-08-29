import React from 'react'
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialLinks() {

    const links =[
        {
            id: 1,
            child:(
                <>
                    LinkdIn <FaLinkedin size={30}/>
                </>
            ),
            href: 'www.linkedin.com/in/ben-assad-zandjibar',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child:(
                <>
                    GitHub <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/BenAssad'
        },
        {
            id: 3,
            child:(
                <>
                    Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:benassad16@gmail.com'
        },
        {
            id: 4,
            child:(
                <>
                    Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: '',
            style: 'rounded-tr-md',
            download: true
        }
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

            {links.map(({id, child, href, style, download})=>(
                <li key={id} className='flex justify-between items-center w-40 h-1/4 px-4 ml-[-90px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
                    <a href={href} className='flex justify-between items-center w-40 h-12 px-2 text-white' download={download} target='_blank' rel="noreferrer">
                        {child}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SocialLinks
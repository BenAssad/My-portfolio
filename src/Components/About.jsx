import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quisquam reprehenderit debitis provident, totam, quod accusamus beatae enim quaerat perspiciatis ipsum cupiditate dicta molestiae et libero quos. Nisi, eos inventore!</p>

            <br />

            <p className='text-xl'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum atque consectetur facere aperiam ab nostrum ratione maiores? Velit iste assumenda recusandae voluptatum eos natus distinctio asperiores eligendi odit quibusdam nisi quaerat dicta commodi culpa quia voluptate pariatur totam dolores quos, delectus consequuntur! Similique tenetur, in dicta magni dolorem nam ducimus?
            </p>
        </div>
    </div>
  )
}

export default About
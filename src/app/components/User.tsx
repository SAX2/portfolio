import Image from 'next/image'
import React from 'react'
import user from '../../../public/images/user.png'

const User = () => {
  return (
    <div className="flex flex-col gap-8 h-full">
      <div className="flex items-center gap-3">
        <Image
          src={user}
          alt="user"
          width={200}
          height={200}
          className="w-[80px] h-auto rounded-xl"
        />
        <div className="relative">
          <h1 className="tracking-tight leading-9 font-semibold text-4xl text-black">
            Hi, im Santino <br /> Degra
          </h1>
          <div className="group  cursor-pointer">
            <div className="absolute right-[-20px] -bottom-[2px] rotate-3 rounded-full px-[6px] py-1 border bg-[#FFD9D8] border-[#D03530] z-30  group-hover:translate-y-8  transition-transform">
              <span className="text-base font-medium">Web Developer</span>
            </div>
            <div className="absolute right-[-30px] -bottom-[2px] rounded-full px-[6px] py-1 border bg-[#FFD9A7] border-[#FFB083]">
              <span className="text-base font-medium">Product designer</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className='text-grey'>
          I am a Web Developer & Product Designer based in Buenos Aires,
          Argentina. I have worked with companies, applications, and startups
          across various industries.
        </p>
      </div>
        <a href="mailto:santinodegra73@gmail.com" className='max-md:w-full w-fit px-[6px] py-1 rounded-md bg-grey-card font-medium flex justify-center items-center'>Contact me</a>
    </div>
  );
}

export default User
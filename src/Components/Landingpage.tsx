import React from 'react'
import { FaFacebookF, FaInstagramSquare, FaTiktok } from 'react-icons/fa'
import { IoIosNotifications } from 'react-icons/io'
import { Link } from 'react-router-dom';


export default function Landingpage() {



  const submitHandel = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();



  };
  return (
    <>
      <div className='h-[100%] bg-[#F3F4F6]'>
        <div className=" flex flex-col justify-between  relative">
          <div className="flex flex-col items-center justify-center">
            <img className="mt-4 lg:w-32 sm:w-28 w-24" src="/logo.png" alt="logo" />
            <p className="text-[#A6A6A6]">चालक देखि ग्राहक सम्म !!</p>
          </div>

          <div>
            <h1
              className="container leading-tight font-helvetica font-bold text-primary text-2xl w-[250px] mx-6 
      sm:text-2xl sm:w-[300px] sm:mx-16 sm:mt-0
      lg:text-3xl lg:w-[350px] lg:mx-28"
            >
              Nepal’s First Subscription Based Ride Sharing App | Made in Nepal
            </h1>
          </div>

          <div className="text-gray-200">
            <img
              className="font-londrina text-center w-[80%] mx-8 mb-10
      sm:mx-16 sm:w-[88%]
      lg:mx-28 lg:w-[85%]"
              src="/coming soon.svg"
              alt="coming soon text"
            />
          </div>

          <div
            className="container flex flex-col sm:max-w-[500px] lg:max-w-[600px] mb-12
    sm:absolute sm:right-0 sm:top-56
    lg:top-[280px]"
          >
            <p
              className="text-2xl font-bold w-80 mb-3 mx-6
      sm:text-2xl sm:w-72
      lg:text-3xl lg:w-[350px]"
            >
              Get Notification When We Launch
            </p>
            <form
              onSubmit={submitHandel}
              className="z-50 border-2 border-primary bg-white rounded-full flex justify-between px-1 py-[1px] w-80 mx-6
      sm:w-[430px]
      lg:w-[500px]"
            >
              <input
                className="focus:outline-none focus:border-0 text-xs sm:text-base rounded-full px-4 w-full"
                type="text"
                placeholder="Enter email or phone number"
                required
                name="email"
              />
              <button
                className="rounded-full bg-primary bg-gradient-to-r from-primary to-[#114558] w-20 text-white flex items-center justify-center gap-2 p-2 text-xs
        sm:text-base sm:w-28"
              >
                Notify <IoIosNotifications />
              </button>
            </form>
          </div>

          <div
            className="flex flex-col mt-8 items-center
    sm:flex-row sm:mt-10"
          >
            <div>
              <img className="w-80 sm:w-[400px] lg:w-[80%]" src="/scooter.svg" alt="scooter" />
            </div>
            <div>
              <img
                className="w-[55%] absolute z-10 right-5 top-32
        sm:w-[65%] sm:top-20
        lg:w-[69%] lg:top-16"
                src="/location.svg"
                alt="Location"
              />
            </div>
            <div className="flex flex-col items-center gap-3">
              <p className="text-base font-medium lg:text-xl sm:mt-16 mt-2 lg:font-bold">
                Meanwhile join the Journey
              </p>

              <div className="flex gap-3 mb-9 ">
                <a href="">
                  <FaFacebookF className="bg-[#1E293B] rounded-full text-white p-2 w-7 h-7" />
                </a>
                <a href="https://www.instagram.com/thevroomnepal/">
                  <FaInstagramSquare className="bg-[#1E293B] rounded-full text-white p-2 w-7 h-7" />
                </a>
                <a href="">
                  <FaTiktok className="bg-[#1E293B] rounded-full text-white p-2 w-7 h-7" />
                </a>
              </div>
              <div className='-mt-8 mb-8'>
              <Link to={"privacy"}>Privacy Policy & Notice</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

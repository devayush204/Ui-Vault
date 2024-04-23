"use client"
import Image from "next/image";
import logo from "@/public/logo.png"
import { motion } from "framer-motion";
import { AlignRight, Github } from "lucide-react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { useState } from "react";

export default function Home() {
  return (
    <main className="w-full h-full overflow-y-auto overflow-x-hidden relative">
      <div className="absolute top-[50px] right-[15px] sm:right-[20px] sm:top-[50px] md:hidden flex items-center justify-center
       md:top-[50px] md:right-[40px] bg-gray-200 rounded-full p-4">
        <AlignRight />
      </div>
      <div className="w-full flex justify-center flex-col space-y-8 items-center max-w-2xl text-center mx-auto mt-8 px-8">
        <Image src={logo} alt="" className="object-contain h-[100px] w-[350px]" />
        <h1 className="sm:text-base text-sm font-medium p-2 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500 text-white px-6">Free Open Source Tailwind CSS Components</h1>
        <h5 className="sm:text-base text-sm leading-[30px] tracking-wider font-medium text-gray-700">
          Discover <p className="p-1 bg-purple-500 text-white -rotate-3 inline-flex">UIForge</p> , a collection of <p className="p-1 bg-red-500 text-white inline-flex rotate-3">free Tailwind CSS components</p> that empower your projects. Craft dynamic marketing sites, sleek admin dashboards, or robust <p className="p-1 bg-green-500 text-white inline-flex rotate-1">eCommerce</p> stores with our diverse selection of <p className="p-1 bg-blue-500 text-white inline-flex -rotate-1">components</p> . Unleash your creativity and enhance your web development journey with {"UIForge's"} complimentary Tailwind CSS offerings.</h5>
      </div>
      <div className="max-w-2xl p-8 rounded-md shadow-2xl mx-4 sm:mx-auto lg:mx-auto mt-20 flex flex-col space-y-4 border border-gray-100 px-8 ">
        <motion.span>👋🏻</motion.span>
        <h5>Greetings, landing page makers around the world! 🌍
          <br />
          <br />
          Find everything you need here: headers, navbars, skeletons, and examples. {"Let's"} build some kick-ass landing pages & websites together!</h5>
        <div className="flex items-center gap-7 justify-between">
          <div className="flex items-center gap-3">
            <div>
              {/* <Image src={maker} alt="founder" className="object-cover rounded-full h-[50px] w-[50px]" /> */}
            </div>
            <div>
              <h5>Ayush</h5>
              <h5>maker @ <span>UIForge</span></h5>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div
        className="bg-indigo-600 max-w-6xl  px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 mt-20 rounded-md md:mx-10 mx-4 sm:mx-3 lg:mx-auto "
      >
        <p className="text-center font-medium sm:text-left">
          Love UIForge ?
          <br className="sm:hidden" />
          {" "}  give it a star on github!
        </p>

        <a
          className="mt-4 sm:block flex mx-auto sm:mx-0 rounded-lg bg-white px-5 py-3 text-center text-sm font-medium text-indigo-600 transition hover:bg-white/90 focus:outline-none focus:ring active:text-indigo-500 sm:mt-0 w-fit "
          href="#"
        >
          <Github />
        </a>
      </div>
      <div className="px-8 pb-6">
        <Hero />
      </div>
      <div>
        <Footer />
      </div>

    </main>
  );
}

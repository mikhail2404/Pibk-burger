import React, {useState} from 'react'
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'
import { SliderData } from '../../Slider/SliderData/sliderData'
import './home.scss'

export default function Home() {
   const [current, setCurrent] = useState(0)
   const length = SliderData.length
   const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1)
   }

   const prevSlide = () => {
      setCurrent(current === 0 ? length -1: current - 1)
   }
   
   return (
      <section className="slider">
         <FaArrowCircleLeft className="left-slide" onClick={prevSlide}/>
         <FaArrowCircleRight className="right-slide" onClick={nextSlide}/>
         {SliderData.map((slide, index) => {
            return(
               <div className={current === index ? "slide  active": "slide"} key={index}>
                  {current === index && <img src={slide.image} alt="burger"/>}
               </div>
            )
         })}
      </section>
   )
}
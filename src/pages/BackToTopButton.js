import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/BackToTop.css'
import {TiArrowUpThick} from 'react-icons/ti'
const BackToTopButton = () => {
    const [backToTopButton, setBackToTopButton] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
    <div>
        {backToTopButton && (
            <button className='btn-back-to-top' onClick={scrollUp}>
                <i className='fa fa-arrow-up'></i>
               
            </button>
        )}
    </div>
  )
}

export default BackToTopButton
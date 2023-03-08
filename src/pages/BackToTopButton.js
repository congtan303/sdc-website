import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/BackToTop.css'

const BackToTopButton = () => {
    const [showGoToTop, setShowGoToTop] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY >= 200) {
                setShowGoToTop(true)
            } else {
                setShowGoToTop(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        // cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
    <div>
        {showGoToTop && (
            <button className='btn-back-to-top' onClick={scrollUp}>
                <i className='fa fa-arrow-up'></i>
            </button>
        )}
    </div>
  )
}

export default BackToTopButton
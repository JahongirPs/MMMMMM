import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollTop() {
    const locationS = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [locationS.pathname])
  return null
}

export default ScrollTop
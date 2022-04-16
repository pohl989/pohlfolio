import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import '../App.css'

const Fader = ({texts}) => {
  const [fadeProp, setFadeProp] = useState({
    fade: 'fade-in',
  })
  const [message, setMessage] = useState(texts[0])

  const getNextMessage = () => {
    const index = texts.indexOf(message)
    const length = texts.length
    if (index === length - 1) return texts[0]
    return texts[index + 1]
  }

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === 'fade-in') {
        setFadeProp({
          fade: 'fade-out',
        })
      } else {
        setMessage(getNextMessage())
        // change text before fade in
        setFadeProp({
          fade: 'fade-in',
        })
      }
    }, 3000)

    return () => clearInterval(timeout)
  }, [fadeProp])

  return (
    <>
      <span className={fadeProp.fade}>{message}</span>
    </>
  )
}

Fader.defaultProps = {
  texts: ['Joyful'],
}

Fader.propTypes = {
  texts: PropTypes.array,
}

export default Fader

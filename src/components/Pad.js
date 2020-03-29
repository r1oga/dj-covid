import React, { useEffect } from 'react'
import styled from 'styled-components'

import Touch from './Touch'
import fx from '../fx'

const Flex = styled.div`
display: flex;
flex-flow: row wrap;
`

const Pad = () => {
  const playSound = ({ keyCode }) => {
    const audio = document.getElementById(keyCode)

    if (!audio) return
    audio.currentTime = 0
    audio.play()
  }

  useEffect(() => {
    window.addEventListener('keydown', playSound)
  }, [])
  return (
    <Flex>
      {
        fx.map((fx, i) => {
          return (
            <Touch {...fx} key={i} />
          )
        })
      }
    </Flex>
  )
}

export default Pad

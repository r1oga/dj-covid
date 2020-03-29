import React, { useEffect } from 'react'
import styled from 'styled-components'

import Touch from './Touch'
import fx from '../fx'

const Pad = () => {
  const Flex = styled.div`
    display: flex;
    flex-flow: row wrap;
  `
  const playSound = e => {
    console.log(e.keyCode)
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

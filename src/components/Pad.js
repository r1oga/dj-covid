import React from 'react'
import styled from 'styled-components'

import Touch from './Touch'

const Pad = () => {
  const letters = ['Q', 'W', 'E', 'S', 'D', 'Z', 'X', 'C']
  const Flex = styled.div`
    display: flex;
    flex-flow: row wrap;
  `
  return (
    <Flex>
      {
        letters.map((letter, i) => {
          return (
            <Touch letter={letter} key={i} />
          )
        })
      }
    </Flex>
  )
}

export default Pad

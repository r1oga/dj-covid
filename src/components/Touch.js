import React from 'react'
import styled from 'styled-components'

const Touch = props => {
  const Div = styled.div`
    background-color: grey;
    border-radius: 5px;
    box-shadow: black 3 3 5;
    height: 80px;
    width: 100px;
    flex: 1 30%;
    margin: 10px;
    vertical-align: middle;
    text-align: center;
  `
  return (
    <Div>
      <span style={{ lineHeight: '80px' }}>{props.letter}</span>
    </Div>
  )
}

export default Touch

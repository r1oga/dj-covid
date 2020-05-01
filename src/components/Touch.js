import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
border-style: outset;
border-color: #DBDBDB;
border-radius: 5px;
box-shadow: black 3 3 5;
height: 70px;
width: 100px;
flex: 1 30%;
margin: 10px;
text-align: center;
font-family: monospace;
cursor: pointer;
`
const Span = styled.span`
color: #F23F52;
font-size: 2em;
font-weight: bold;
line-height: 70px;
vertical-align: middle;
`

const Touch = props => {
  const playSound = ({ target }) => {
    const keyCode = target.children[0].innerHTML
    const audio = document.getElementById(keyCode)
    if (!audio) return
    audio.currentTime = 0
    audio.play()
  }
  return (
    <>
      <Div className='drum-pad' id={props.name} onClick={playSound}>
        <Span>{props.letter}</Span>
        <audio className='clip' id={props.letter} src={props.url} />
      </Div>
    </>
  )
}

export default Touch

import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
background-color: rgb(99, 190, 135);
border-radius: 5px;
box-shadow: black 3 3 5;
height: 80px;
width: 100px;
flex: 1 30%;
margin: 10px;
vertical-align: middle;
text-align: center;
font-family: monospace
`
const Span = styled.span`
color: rgb(195, 67, 67);
font-size: 2em;
line-height: 55px;
`

const Touch = props => {
  const playSound = ({ target }) => {
    const keyCode = target.children[0].id
    const audio = document.getElementById(keyCode)

    if (!audio) return
    audio.currentTime = 0
    audio.play()

    document.getElementById('display').innerHTML = props.name
  }
  return (
    <>
      <Div className='drum-pad' id={props.name} onClick={playSound}>
        {props.letter}
        <audio className='clip' id={props.letter} src={props.url} />
      </Div>
    </>
  )
}

export default Touch

import React from 'react'

import Layout from './components/Layout'
import Pad from './components/Pad'

function App () {
  return (
    <div className='App' id='drum-machine'>
      <Layout>
        <p id='display' />
        <Pad />
      </Layout>
    </div>
  )
}

export default App

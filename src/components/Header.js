import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='ui divider horizontal'>
        <div
          className='ui center aligned segment basic'
          style={{ color: '#DBDBDB' }}
        >
          <span role='img' aria-label='virus'>🦠{' '}</span>
          DJ COVID
          <span role='img' aria-label='virus'>{' '}🦠</span>
        </div>
      </div>
    </div>
  )
}

export default Header

import React from 'react'

const Footer = () => {
  return (
    <div className='ui horizontal divider'>
      <div className='ui segment basic center aligned'>
        <p>
         Developed with {' '}
          <a
            href='https://reactjs.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i
              aria-hidden='true'
              className='react icon large'
            />
          </a>
         by {' '}
          <a
            href='https://twitter.com/r1oga'
            target='_blank'
            rel='noopener noreferrer'
          >
               @r1oga
          </a>
        </p>
        <p>
          <a
            href='https://github.com/r1oga/dj-covid'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i
              aria-hidden='true'
              className='icon github large'
              size='large'
              color='black'
            />
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer

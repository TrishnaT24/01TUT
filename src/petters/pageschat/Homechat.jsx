import React from 'react'
import Sidebar from '../componentschat/Sidebar'
import Chat from '../componentschat/Chat'

const Homechat = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Homechat
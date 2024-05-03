import React ,{useContext}from 'react'
import Cam from '../imgchat/cam.png';
import More from '../imgchat/more.png';
import Add from '../imgchat/add.png';
import Input from './Input';
import Messages from './Messages';
import { ChatContext } from '../contextchat/ChatContext';


const Chat = () => {
  const {data} =useContext(ChatContext);

  return (
    <div className='chat'>
    <div className='chatInfo'>
      <span>{data.user?.displayName}</span>
      <div className='chatIcons'>
        <img src={Cam}alt="" />
        <img src={Add}alt="" />
        <img src={More}alt="" />
      </div>
      </div>
      <Messages />
      <Input />

    </div>
  )
}

export default Chat

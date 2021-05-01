import React, { Component } from 'react'
import { Box } from '@chakra-ui/react'
import ChangeColor from '../components/Example'
import Message from '../components/Message'
import ThemeToggle from '../components/ThemeToggle'
import MessageInput from '../components/MessageInput'

class Chat extends Component {
  render(){
    const items = []
    for (var i = 0; i < 11; i++) {
      items.push(<Message
            username="george.gsg"
            text="Hey! I'm George. Nice to meet you. I have some spare time. Not doing much right now. Let's talk!"
            imageUrl="https://bit.ly/2Z4KKcF"
            imageAlt="Rear view of modern home with pool"
            colorScheme="purple"
            date="May 1, 2021"
            time="2:30 PM"/>)
    }
    return (
      <div>
        <Box maxW="xl" margin="0" height="100vh" >
          <Box margin="0" height="95%" overflowY='scroll' sx={{
            '&::-webkit-scrollbar': {
              width: `20px`,
            },
            '&::-webkit-scrollbar-thumb': {
              background: `#e9d8fd`,
              borderRadius: `20px`,
              border: `6px solid transparent`,
              backgroundClip: `content-box`,
            },
            '&::-webkit-scrollbar-thumb:vertical:hover': {
              background: `#815ad5`,
              borderRadius: `20px`,
              border: `6px solid transparent`,
              backgroundClip: `content-box`,
            }
          }}>
            <Message
              username="george.gsg"
              text="Hey! I'm George. Nice to meet you. I have some spare time. Not doing much right now. Let's talk!"
              imageUrl="https://bit.ly/2Z4KKcF"
              imageAlt="Rear view of modern home with pool"
              colorScheme="purple"
              date="May 1, 2021"
              time="2:30 PM"/>
            {items}
          </Box>
          <MessageInput/>
        </Box>
      </div>
    )
  }
}

export default Chat;

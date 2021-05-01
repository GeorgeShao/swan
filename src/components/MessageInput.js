import React, { Component } from 'react'
import { InputGroup, Input, InputRightElement, IconButton } from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'

class MessageInput extends Component {
  render(){
    return (
      <InputGroup size="sm">
        <Input placeholder="Enter Message..." />
        <InputRightElement>
          <IconButton h="1.75rem" size="sm" icon={<ArrowUpIcon/>} colorScheme="purple"/>
        </InputRightElement>
      </InputGroup>
    )
  }
}

export default MessageInput;

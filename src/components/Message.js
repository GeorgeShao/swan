import React, { Component } from 'react';
import { Box, Badge } from '@chakra-ui/react';

class Message extends Component {
  render(){
    return (
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
    >
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme={this.props.colorScheme}>
              {this.props.username}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {this.props.time} &bull; {this.props.date}
            </Box>
          </Box>

          <Box
            mt="1"
            as="h4"
            lineHeight="tight"
            d="flex"
            align="start"
          >
            {this.props.text}
          </Box>
        </Box>
        {/* <Image src={this.props.imageUrl} alt={this.props.imageAlt} /> */}
      </Box>
    );
  }
}

export default Message;

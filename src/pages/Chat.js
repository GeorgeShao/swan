import React, { Component, useEffect, useState } from 'react'

import { Box } from '@chakra-ui/react'
import ChangeColor from '../components/Example'
import Message from '../components/Message'
import ThemeToggle from '../components/ThemeToggle'
import MessageInput from '../components/MessageInput'
import { InputGroup, Input, InputRightElement, IconButton } from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'
import { Formik, Field, Form } from "formik";

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import API, { graphqlOperation } from '@aws-amplify/api';
import { messagesByChannelID } from '../graphql/queries';


function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    API
      .graphql(graphqlOperation(messagesByChannelID, {
        channelID: 'general',
        sortDirection: 'ASC'
      }))
      .then((response) => {
        const items = response?.data?.messagesByChannelID?.items;

        if (items) {
          setMessages(items);
        }
      })
  }, []);

  const handleChange = () => {};
  const handleSubmit = () => {};

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
          {messages.map((message) => (
            <Message
              key={message.id}
              username={message.username}
              text={message.text}
              colorScheme="purple"
              date={message.createdAt}
              time="X:XX PM"/>
          ))}
        </Box>
        <Formik
          initialValues={{ message: "" }}
          onSubmit={(values, actions) => {
            // insert handleSubmit code here
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 1000)
          }}
        >
          {(props) => (
            <Form>
              <Field name="message">
                {({ field, form }) => (
                  <InputGroup size="md">
                    <Input {...field} name="message" placeholder="Enter Message..."/>
                    <InputRightElement>
                      <IconButton h="1.75rem" size="md" marginEnd="10px" icon={<ArrowUpIcon/>} colorScheme="purple" type="submit"/>
                    </InputRightElement>
                  </InputGroup>
                )}
              </Field>
            </Form>
          )}
        </Formik>
      </Box>
      <AmplifySignOut />
    </div>
  )
}

export default withAuthenticator(Chat);

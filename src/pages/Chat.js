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
import { listMessages } from '../graphql/queries';


function Chat() {
  const handleChange = () => {};
  const handleSubmit = () => {};

  const items = []
  for (var i = 0; i < 11; i++) {
    items.push(<Message
          username="george.gsg"
          text="Hey! I'm George. Nice to meet you. I have some spare time. Not doing much right now. Let's talk!"
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
            colorScheme="purple"
            date="May 1, 2021"
            time="2:30 PM"/>
          {items}
        </Box>
        <Formik
          initialValues={{ message: "Sasuke" }}
          onSubmit={(values, actions) => {
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

import React from 'react'
import { Heading, Flex } from '@chakra-ui/core'
import AttestationForm from './AttestationForm'

const Layout = () => {
  return (
    <Flex direction="column" align="center">
      <Flex w="600px" direction="column" pos="relative">
        <Heading mb={2}>Formation plus</Heading>
        <AttestationForm />
      </Flex>
    </Flex>
  )
}

export default Layout

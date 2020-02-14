import React from 'react'
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core'
import Layout from './components/Layout'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* Resets default browser styles */}
      <CSSReset />
      <Layout />
    </ThemeProvider>
  )
}

export default App

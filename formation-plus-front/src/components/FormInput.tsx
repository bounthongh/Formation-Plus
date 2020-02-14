import React, { forwardRef } from 'react'
import { InputProps, FormControl, FormLabel, Input } from '@chakra-ui/core'

interface Props extends InputProps {
  label: string
  htmlFor: string
  children?: React.ReactNode
}

const FormInput: React.FC<Props> = forwardRef(
  ({ label, htmlFor, children, ...props }, ref) => {
    return (
      <FormControl w="100%">
        <FormLabel htmlFor={htmlFor}>{label}</FormLabel>
        {!children && <Input id={htmlFor} {...props} />}
        {children && children}
      </FormControl>
    )
  },
)

export default FormInput

import { Button as ChakraButton } from '@chakra-ui/react'

interface IButton {
  text: string
  onClick: () => void
}

export const Button = ({ text, onClick }: IButton) => {
  return (
    <ChakraButton 
      onClick={onClick} 
      colorScheme='teal' 
      size='sm' 
      width='100%' 
      marginTop='5px'
    >
      {text}
    </ChakraButton>
  )
}
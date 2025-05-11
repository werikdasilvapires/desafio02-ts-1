import './Header.css'
import { Box, Text } from '@chakra-ui/react'

export const Header = () => {
  return(
    <Box className='header' padding='15px'>
      <Text fontSize='3xl' fontWeight='bold'>Dio Bank</Text>
    </Box>
  )
}
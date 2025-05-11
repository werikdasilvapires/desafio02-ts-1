import { Box, Center, Input, FormControl, FormLabel } from '@chakra-ui/react'
import { Button } from './Button'
import { login } from '../services/login'
import { useState } from 'react'

interface ICard {
  title?: string
}

export const Card = ({ title }: ICard) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = () => {
    login()
  }

  return (
    <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'>
      <Center>
        <h1>{title}</h1>
      </Center>
      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input 
          id="email"
          placeholder="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          marginBottom='5px' 
        />

        <FormLabel htmlFor="password">Password</FormLabel>
        <Input 
          id="password"
          type="password"
          placeholder="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          marginBottom='5px' 
        />
        
        <Center marginTop="4">
          <Button text="Entrar" onClick={handleSubmit} />
        </Center>
      </FormControl>
    </Box>
  )
}
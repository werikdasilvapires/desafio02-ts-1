import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button,
} from '@chakra-ui/react'
import { login } from './services/login';
import { Card } from './components/Card'
import { Layout } from './components/Layout'

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
          <Card title="Faça o login" />
        </Box>
      </Layout>
    </ChakraProvider>
  );
}

export default App;

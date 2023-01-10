import { ChakraProvider, theme } from '@chakra-ui/react';
import { RouteComponent } from './RouteComponent';

function App() {
  return (
    <ChakraProvider theme={theme}>
    <RouteComponent />
  </ChakraProvider>

  );
}

export default App;

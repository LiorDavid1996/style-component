import {Container} from './components/styles/containar.style'
import Header  from './components/fetur/Header'
import {theme} from './components/styles/theme.js'
import {ThemeProvider} from 'styled-components'
import  GlobalStyle from './components/styles/Global.js'
function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyle/>
         <Header/>
         <Container>
         <h1>Hello Word</h1>
         </Container>
    </>
    </ThemeProvider>
  );
}

export default App;

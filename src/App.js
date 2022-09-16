import {Container} from './components/styles/containar.style'
import Header  from './components/fetur/Header'
import {theme} from './components/styles/theme.js'
import {ThemeProvider} from 'styled-components'
import  GlobalStyle from './components/styles/Global.js'
import content from './content'
import Card from './components/fetur/Card'
import Footer from './components/fetur/Footer'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyle/>
         <Header/>
         <Container>
        {content.map((item,index)=> (
          <Card key={index} item={item}/>
        ))} 
         </Container>
         <Footer/>
    </>
    </ThemeProvider>
  );
}

export default App;

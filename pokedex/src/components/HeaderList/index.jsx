import React from 'react'
import {Container, Img, Button} from './styled'
import Logo from '../../assets/logo.png'


const Header = () => {
  return (
    <>  
    <Container> 
    <Img src={Logo} alt="logo"/>
    <Button> 
        MEUS POKEMONS
    </Button>
    </Container>    
    </>
  )
}

export default Header 


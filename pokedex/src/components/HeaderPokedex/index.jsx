import React from 'react'
import {Container, Img, Button} from './styled'
import Logo from '../../assets/logo.png'


const HeaderPokedex = () => {
  return (
    <>  
    <Container> 
    <Img src={Logo} alt="logo"/>
    <Button> 
        VOLTAR PARA A LISTA DE POKEMONS
    </Button>
    </Container>    
    </>
  )
}

export default HeaderPokedex 


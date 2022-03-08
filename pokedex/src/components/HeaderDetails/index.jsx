import React from 'react'
import {Container, Img, Button, ContainerButtons} from './styled'
import Logo from '../../assets/logo.png'


const HeaderDetails = () => {
  return (
    <>  
    <Container> 
    <Button> 
        VOLTAR
    </Button>
    <Img src={Logo} alt="logo"/>
    <ContainerButtons>
    <Button> 
        ADICIONAR
    </Button>
    <Button> 
        REMOVER
    </Button>
    </ContainerButtons>
    </Container>    
    </>
  )
}

export default HeaderDetails 


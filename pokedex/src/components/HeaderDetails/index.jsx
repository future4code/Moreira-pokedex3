import React from 'react'
import {Container, Img, Button, ContainerButtons} from './styled'
import Logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'


const HeaderDetails = () => {
  
  const history = useNavigate()
  
  return (
    <>  
    <Container>           
    <Button onClick={() => history(-1)}>VOLTAR </Button>
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


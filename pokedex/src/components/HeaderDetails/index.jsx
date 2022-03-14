import React from 'react'
import {Container, Img, Button, ContainerButtons} from './styled'
import Logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'


const HeaderDetails = () => {
  
  const history = useNavigate()
  
  return (
    <>  
    <Container>           
    <Img src={Logo} alt="logo"/>
    <Button onClick={() => history(-1)}>VOLTAR </Button>
    <ContainerButtons>
    </ContainerButtons>
    </Container>    
    </>
  )
}

export default HeaderDetails 


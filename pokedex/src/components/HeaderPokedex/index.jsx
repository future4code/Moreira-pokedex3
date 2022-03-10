import React from 'react'
import {Container, Img, Button} from './styled'
import Logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const HeaderPokedex = () => {

  const history = useNavigate()

  return (
    <>  
    <Container> 
    <Img src={Logo} alt="logo"/>
    <Button onClick={() => history('/list_pokemons')}>VOLTAR PARA A LISTA DE POKEMONS</Button>
    </Container>    
    </>
  )
}

export default HeaderPokedex 


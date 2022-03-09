import React from 'react';
import background from '../../assets/background.svg'
import person from '../../assets/image.png'
import logo from '../../assets/logo.png'
import styled from 'styled-components';
import { IoEnterOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';

const Main = styled.div`
  background-image: url(${background}) ;
  background-size: cover ;
  min-height: 100vh ;
`

const Logo = styled.div`
  margin-left: auto ;
  margin-right: auto ;
  height: 28.5vh ;
  width: 45%;
  display: flex;
  justify-content: center;
`

const ImgLogo = styled.img`
  width: 100% ;
  padding: 10px ;
`

const Person = styled.div`
  margin-right: 2px ;
  margin-bottom: -10px ;
`

const ImgPerson = styled.img`
  width: 100% ;
  height: 65vh ;
`

const Container = styled.div`
  width: 100% ;
  display: flex ;
  justify-content: space-between;
  align-items: center;
  position: fixed ;
  bottom: 0px ;
`

const DivButton = styled.div`
  display: flex ;
  justify-content: center;
  width: 50.1% ;
  height: 10vh ;
`

const Button = styled.button`
  width: 32%;
  display: flex ;
  align-items: center;
  justify-content: center ;
  border-radius: 15px ;
  border: 0px ;
  background-color: white ;
  white-space: normal !important;
  :hover{
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.5s ease 0s;
  }  
`

const PButton = styled.p`
  margin-right: 10% ;
  font-size: 22px;
  font-weight: bold ;
  color: #1E82DE ;
  
`

const Home = () => {

  const navigate = useNavigate()

  const goToListPokemons = () => {
    navigate('/list_pokemons')
  }

  return (
    <Main>
      <Logo>
        <ImgLogo src={logo} />
      </Logo>
      <Container>
        <DivButton>
          <Button onClick={goToListPokemons}>
            <PButton>ENTRAR</PButton> <IoEnterOutline style={{ fontSize: '35px', color: '#1E82DE' }} />
          </Button>
        </DivButton>
        <Person>
          <ImgPerson src={person} />
        </Person>
      </Container>

    </Main>
  );
}

export default Home;
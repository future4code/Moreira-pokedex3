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
  min-width: 100vh ;
`

const Logo = styled.div`
  height: 250px ;
  display: flex;
  justify-content: center
`

const ImgLogo = styled.img`
  height: 550px ;
  margin-top: -100px ;
`

const Person = styled.div`
  bottom: 5px ;
`

const ImgPerson = styled.img`
  height: 600px ;
  margin-bottom: -5px ;
`

const Container = styled.div`
  display: flex ;
  justify-content: flex-end;
  align-items: center;
  position: fixed ;
  bottom: 0px ;
`

const DivButton = styled.div`
  display: flex ;
  justify-content: center;
  width: 95vh ;
`

const Button = styled.button`
  margin-right: 150px ;
  height: 80px ;
  width: 300px ;
  font-size: 22px;
  color: #1E82DE ;
  display: flex ;
  align-items: center;
  justify-content: center ;
  font-weight: bold ;
  border-radius: 15px ;
  border: 0px ;
  background-color: white ;
  :hover{
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.5s ease 0s;
  }  
`

const PButton = styled.p`
  margin-right: 30px ;
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
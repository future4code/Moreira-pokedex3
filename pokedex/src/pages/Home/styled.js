import styled from 'styled-components';
import background from '../../assets/background.svg'

export const Main = styled.div`
  background-image: url(${background}) ;
  background-size: cover ;
  min-height: 100vh ;
`

export const Logo = styled.div`
  margin-left: auto ;
  margin-right: auto ;
  height: 28.5vh ;
  width: 45%;
  display: flex;
  justify-content: center;
`

export const ImgLogo = styled.img`
  width: 100% ;
  padding: 10px ;
`

export const Person = styled.div`
  margin-right: 2px ;
  margin-bottom: -10px ;
`

export const ImgPerson = styled.img`
  width: 100% ;
  height: 65vh ;
`

export const Container = styled.div`
  width: 100% ;
  display: flex ;
  justify-content: space-between;
  align-items: center;
  position: fixed ;
  bottom: 0px ;
`

export const DivButton = styled.div`
  display: flex ;
  justify-content: center;
  width: 50.1% ;
  height: 10vh ;
`

export const Button = styled.button`
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

export const PButton = styled.p`
  margin-right: 10% ;
  font-size: 22px;
  font-weight: bold ;
  color: #1E82DE ;
  
`
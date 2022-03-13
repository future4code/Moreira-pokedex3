import styled from 'styled-components'
import background from '../../assets/background.svg'

export const Container = styled.div`
  display: flex ;
  justify-content: center;
  margin-top: 4%;
  justify-content: space-evenly 
`

export const CardLeft = styled.div`
  width: 22%;
  height: 56vh;
	background: #1E82DE;
	transform: perspective(300px) rotateY(25deg);
  margin-top: 3.2% ;
  border-radius: 10px ;
  transition: all 1s ease 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover{
    transform: perspective(300px) rotateY(0deg);
    transition: all 0.8s ease 0s;
  }
`

export const DivCardCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 57vh;
  border: 2px solid black;
`

export const DivStats = styled.div`
  text-align: center;
  margin-top: -18%;
  max-height: 15vh;
`

export const DivMain = styled.div`
  max-height: 90%;
  margin-top: -8%;
  height: 45vh;
`

export const TittleStats = styled.h3`
  color: #E2BB25;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.4em;
  margin-top: 10px;
  height: 3.5vh;
`

export const Stats = styled.p`
  color: white;
  margin-top: 15%;
  font-weight: bold;
  font-size: 1.3em;
  height: 3.5vh;
`

export const ID = styled.p`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  padding: 0px 10px 10px 10px;
`

export const DivId = styled.div`
  min-width: 16%;
  height:5.7vh ;
  background-color: #E2BB25;
  border-radius: 0px 0px 25px 25px;
  text-align: center;
  margin-bottom: 10%;
`

export const PokeImg = styled.img`
  width: 70%;
  height: 40vh;
  margin-top: -5%;
  margin-bottom: 2.5%;
`

export const Name = styled.p`
  color: #E2BB25;
  font-size: 2.5rem;
  padding: 10px;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const DivName = styled.div`
  height: 8vh;
  text-align: center;
  margin-bottom: 2%;
  max-width: 76%;
  border: 2px solid red;
`

export const CardCenter = styled.div`
  width: 28.8%;
  margin-top: 3%;
  height: 57vh;
	border-radius: 25px;
	background-image: url(${background});
  border: 2px solid yellow;
  display: flex;
  align-items: center;
  flex-direction: column;
  `

export const CardRight = styled.div`
  width: 22%;
	height: 56vh;
	background: #1E82DE;
	transform: perspective(300px) rotateY(-25deg);
  margin-top: 3.2% ;
  border-radius: 10px ;
  transition: all 1s ease 0s;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover{
    transform: perspective(300px) rotateY(0deg);
    transition: all 0.8s ease 0s;
  }
  
`

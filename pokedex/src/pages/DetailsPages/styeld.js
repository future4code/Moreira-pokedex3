import styled from 'styled-components'
import background from '../../assets/background.svg'

export const Container = styled.div`
  display: flex ;
  justify-content: center;
  margin-top: 4%;
  justify-content: space-evenly 
`

export const CardLeft = styled.div`
  width: 19.8%;
  height: 36.6vh;
	background: #1E82DE;
	transform: perspective(300px) rotateY(25deg);
  margin-top: 3.1% ;
  border-radius: 10px ;
  transition: all 1s ease 0s;

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
`

export const ID = styled.p`
  background-color: #E2BB25;
`

export const CardCenter = styled.div`
  width: 28.8%;
  height: 57vh;
	border-radius: 25px;
	background-image: url(${background});
  `

export const CardRight = styled.div`
  width: 19.8%;
	height: 36.6vh;
	background: #1E82DE;
	transform: perspective(300px) rotateY(-25deg);
  margin-top: 3.1% ;
  border-radius: 10px ;
  transition: all 1s ease 0s;

  :hover{
    transform: perspective(300px) rotateY(0deg);
    transition: all 0.8s ease 0s;
  }
`

export const CardBotton = styled.div`
  width: 64% ;
  height: 19vh ;
  background: #1E82DE;
  margin-left: auto ;
  margin-right: auto ;
  margin-top: 2% ;
  border-radius: 10px ;
  display: flex ;
  justify-content: space-around;
  align-items: center;
`

export const DivCard2 = styled.div`
  border: 2px solid red;
  height: 12vh;
  width: 12.5% ;
`
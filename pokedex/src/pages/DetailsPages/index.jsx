import React from 'react';
import styled from 'styled-components'
import background from '../../assets/background.svg'


const Main = styled.div`

`

const Container = styled.div`
  display: flex ;
  justify-content: center;
  margin-top: 8vh;
  justify-content: space-evenly;
  
`

const CardLeft = styled.div`
  width: 380px;
	height: 340px;
	background: #1E82DE;
	transform: perspective(300px) rotateY(25deg);
  margin-top: 9.3vh ;
  border-radius: 10px ;
`

const CardCenter = styled.div`
  width: 550px;
	height: 550px;
	border-radius: 25px;
	background-image: url(${background});
  margin-top: 2vh ;
`

const CardRight = styled.div`
  width: 380px;
	height: 340px;
	background: #1E82DE;
	transform: perspective(300px) rotateY(-25deg);
  margin-top: 8.3vh ;
  border-radius: 10px ;
`

const CardBotton = styled.div`
  width: 64vw ;
  height: 180px ;
  background: #1E82DE;
  margin-left: auto ;
  margin-right: auto ;
  margin-top: 10vh ;
  border-radius: 10px ;
  display: flex ;
  justify-content: space-around;
  align-items: center;
`

const DivCard2 = styled.div`
  border: 2px solid red;
  height: 110px ;
  width: 150px ;
`

function DetailsPages() {
  return (
    <Main>
    <Container>
      <CardLeft>  

      </CardLeft>
      <CardCenter>

      </CardCenter>
      <CardRight>

      </CardRight>
    </Container>
    <CardBotton>
      <DivCard2>
      </DivCard2>
      <DivCard2>
      </DivCard2>
      <DivCard2>
      </DivCard2>
    </CardBotton>
  </Main>
  );
}

export default DetailsPages;
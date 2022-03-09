import React from 'react';
import styled from 'styled-components'
import background from '../../assets/background.svg'


const Main = styled.div`

`

const Container = styled.div`
  display: flex ;
  justify-content: center;
  margin-top: 4%;
  justify-content: space-evenly 
`

const CardLeft = styled.div`
  width: 19.8%;
  height: 36.6vh;
	background: #1E82DE;
	transform: perspective(300px) rotateY(25deg);
  margin-top: 4.1% ;
  border-radius: 10px ;
  
`

const CardCenter = styled.div`
  width: 28.8%;
  height: 57vh;
	border-radius: 25px;
	background-image: url(${background});
  margin-top: 1% ;
`

const CardRight = styled.div`
  width: 19.8%;
	height: 36.6vh;
	background: #1E82DE;
	transform: perspective(300px) rotateY(-25deg);
  margin-top: 4.1% ;
  border-radius: 10px ;
`

const CardBotton = styled.div`
  width: 64% ;
  height: 19vh ;
  background: #1E82DE;
  margin-left: auto ;
  margin-right: auto ;
  margin-top: 5% ;
  border-radius: 10px ;
  display: flex ;
  justify-content: space-around;
  align-items: center;
`

const DivCard2 = styled.div`
  border: 2px solid red;
  height: 12vh;
  width: 12.5% ;
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
import styled from 'styled-components'
import background from '../../assets/background.svg'

export const Container = styled.div`
    margin: 50px auto;
    width: 90%;
    height: 92vh;
    grid-gap: 15px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 4fr));
    
`
export const Card = styled.div`
    background-image: url(${background}) ;
    background-size: cover ;
    height: auto ;
    width: auto ;
    margin: 10px;
    border-radius: 10px;
    padding: 10px;
    color: #FFFFFF;
    font-weight: bold;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
`
export const Button = styled.button`
    border: 0;
    padding: 6px;
    border-radius: 6px;
    margin: 4px;
    cursor: pointer;
`
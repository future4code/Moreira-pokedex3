import React, {useContext} from 'react';
import HeaderList from '../../components/HeaderList'
import GlobalStateContext from "../../context/GlobalContext/GlobalStateContext"

import { useNavigate } from 'react-router-dom'

import { Container, Card, Button } from './styled'

function ListPokemonsPage() {
  const pokemons = useContext(GlobalStateContext)
  console.log('vei',pokemons.map(res => res))

  const history = useNavigate()
  
  return (
    <>
      <HeaderList />
      <Container>
        {
          pokemons.map(res => (
            <Card>
                <p>{res.name[0].toUpperCase() + res.name.slice(1)}</p>
                <img src={res.image} alt={res.name} style={{width: '50%'}}/>
              <div>
                <Button>Adicionar</Button>
                <Button onClick={() => { history(`/details_pages/${res.name}`)}}>Detalhes</Button>
              </div>
            </Card>))
        }
      </Container>
    </>
  );
}

export default ListPokemonsPage;
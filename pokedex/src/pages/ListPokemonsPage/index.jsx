import React, {useState,useContext} from 'react';
import HeaderList from '../../components/HeaderList'
import GlobalStateContext from "../../context/GlobalContext/GlobalStateContext"

import { useNavigate } from 'react-router-dom'

import { Container, Card, Button } from './styled'

function ListPokemonsPage() {
  const [pokemons] = useContext(GlobalStateContext)
  const [ pokedex, setPokedex ] = useContext(GlobalStateContext);
  const [pokemonList, setPokemonList] = useContext(GlobalStateContext);
  const [newPokemons, setNewPokemons] = useState(pokemonList);

  const history = useNavigate()

  const addToPokedex = (pokemonToAdd) => {
    console.log("entrou");

    const position = pokedex.findIndex((pokemon) => {
      return pokemon.id === pokemonToAdd.id;
    });

    console.log(position);
  
  const newPokedex = [...pokedex];

    console.log('list',newPokedex);

    if (position === -1) {
      newPokedex.push({ ...pokemonToAdd });
    }

    setPokedex(newPokedex);
  
    const newPokemonList = pokemons.filter(
      (pokemon) => pokemon.id !== pokemonToAdd.id
    );

    setNewPokemons(newPokemonList);
  };
  console.log('new',newPokemons)
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
                <Button onClick={() => {addToPokedex(res)}}>Adicionar</Button>
                <Button onClick={() => history(`/details_pages/${res.name}`)}>Detalhes</Button>
              </div>
            </Card>))
        }
      </Container>
    </>
  );
}

export default ListPokemonsPage;
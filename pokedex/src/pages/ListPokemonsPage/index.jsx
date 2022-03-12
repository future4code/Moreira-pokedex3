import React, {useState,useContext} from 'react';
import HeaderList from '../../components/HeaderList'
import GlobalStateContext from "../../context/GlobalContext/GlobalStateContext"
import { useNavigate } from 'react-router-dom'
import { Container, Card, Button } from './styled'

function ListPokemonsPage() {
  const {pokemons, setPokemons, pokedex, setPokedex, paginacao, setPaginacao, pokemonList, setPokemonList}=useContext(GlobalStateContext)

  const history = useNavigate()

  const onClickAdd = ((pokeToAdd)=>{
    
    const index = pokemonList.findIndex((pokemon)=>{
        return pokemon.name === pokeToAdd.name
    })

    if(index === -1){
        const listaPokes = pokemonList
        listaPokes.push(pokeToAdd)
        setPokemonList(listaPokes)
        console.log(pokemonList)

        const newPokemonList = pokemons.filter((pokemon)=>{ //removendo da home
          return pokemon.name !== pokeToAdd.name
      })
      setPokemons(newPokemonList)
      localStorage.setItem('pokedex', JSON.stringify(pokemonList))
      localStorage.setItem('pokemons', JSON.stringify(pokemons))
    }

})
  return (
    <>
      <HeaderList />
      <Container>
        {
          pokemons.map(res => (
            <Card key={res.id}>
                <p>{res.name[0].toUpperCase() + res.name.slice(1)}</p>
                <img src={res.image} alt={res.name} style={{width: '50%'}}/>
              <div>
                <Button onClick={() => {onClickAdd(res)}}>Adicionar</Button>
                <Button onClick={() => history(`/details_pages/${res.name}`)}>Detalhes</Button>
              </div>
            </Card>))
        }
      </Container>
    </>
  );
}

export default ListPokemonsPage;
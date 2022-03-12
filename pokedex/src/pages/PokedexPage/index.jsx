import React, { useContext } from "react";
import HeaderPokedex from "../../components/HeaderPokedex";
import GlobalStateContext from "../../context/GlobalContext/GlobalStateContext";
import { Container, Card, Button } from "./styled";
import { useNavigate } from 'react-router-dom'


function PokedexPage() {
  const {
    pokemons,
    pokedex,
    pokemonList,
    setPokemonList,
    setPokemons,
    setPokedex,
  } = useContext(GlobalStateContext);

  const history = useNavigate()
  
  const onClickRemover = (RemovePoke,res) => {
    const novaLista = pokemonList.filter((pokemon) => {
      localStorage.removeItem(res.id);
      return pokemon.name !== RemovePoke.name;
    });
    setPokemonList(novaLista);
    const retornaPokemon = [RemovePoke, ...pokemons];
    setPokemons(retornaPokemon);
  };
  const pokes = localStorage.getItem("pokedex");
  const poker = JSON.parse(pokes);
  console.log("store", poker);
  return (
    <>
      <HeaderPokedex />
      <Container>
        {poker.map((res) => (
          <Card key={res.id}>
            <p>{res.name[0].toUpperCase() + res.name.slice(1)}</p>
            <img src={res.image} alt={res.name} style={{ width: "50%" }} />
            <div>
              <Button onClick={() => {onClickRemover(res)}}>Remover</Button>
              <Button onClick={() => history(`/details_pages/${res.name}`)}>Detalhes</Button>
            </div>
          </Card>
        ))}
      </Container>
    </>
  );
}

export default PokedexPage;

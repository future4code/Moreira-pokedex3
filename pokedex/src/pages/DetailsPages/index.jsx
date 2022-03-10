import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderDetails from '../../components/HeaderDetails';
import GlobalStateContext from '../../context/GlobalContext/GlobalStateContext';
import { CardBotton, CardCenter, ID, CardLeft, CardRight, Container, DivCard2, DivCardCenter } from './styeld';
import { Progress } from 'antd';

function DetailsPages() {

  const pokemons = useContext(GlobalStateContext)

  const { name } = useParams()

  const PokemonDetails = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }
    

  useEffect(() => {
    PokemonDetails()
  }, [])

  return (
    <div>
      <HeaderDetails />
      <Container>
        <CardLeft>
        {pokemons.map((pokemon) => {
      if(name === pokemon.name){
        return <div key={pokemon.id}>
        <p> peso {pokemon.weight}KG</p>
        <p>tamanho {pokemon.height}M</p>
        <div>{pokemon.abilities.map((ab) => {
          return <p  key={ab.ability.name}> Habilidade {ab.ability.name}</p>
        })}</div>
        <div>{pokemon.types.map((ab) => {
          return <p  key={ab.type.name}> tipo {ab.type.name}</p>
        })}</div>
    
        </div>
        
      }
    })}
        </CardLeft>
        <CardCenter>

     {pokemons.map((pokemon) => {
      if(name === pokemon.name){
        return <DivCardCenter key={pokemon.id}>
        <ID>#{pokemon.id}</ID>
        <img src={pokemon.image} alt={pokemon.name} style={{width: '60%'}} />
        <p>{pokemon.name}</p>
        </DivCardCenter>  
      }
    })}
        </CardCenter>
        
        <CardRight>
        <Progress percent={50} steps={3} />
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
    </div>
  );
}

export default DetailsPages;


 {/* {detailPokemon.map((pok) => {
          if(name === pok.name){
            return (<p></p> {pok.image} alt={pok.name} style={{width: '50%'}} /> )
          }
    })} */}
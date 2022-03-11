import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderDetails from '../../components/HeaderDetails';
import GlobalStateContext from '../../context/GlobalContext/GlobalStateContext';
import { CardBotton, CardCenter, ID, Name, CardLeft, Stats, DivStats, TittleStats, PokeImg, CardRight, Container, DivCard2, DivCardCenter } from './styeld';
import { Progress } from 'antd';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

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
    
  const addZeroes = ( num, len) => {
    var numberWithZeroes = String(num);
    var counter = numberWithZeroes.length;
      
  while(counter < len) {
  
      numberWithZeroes = "0" + numberWithZeroes;
    
    counter++;
  
    }
  
  return numberWithZeroes;
}

  useEffect(() => {
    PokemonDetails()
  }, [])

  const teste = () => {
    
  }

  const value1 = 47/100

  const data = [
    {
      data: {
        HP:0.2,
        Attack: value1,
        Defense: 0.4,
        Special_Attack: 0.3,
        Special_Defense: 0.6,
        Speed: 0.9
      },
      meta: { class: "color-red"},
    }    
  ];

const captions = {
    HP: 'HP',
    Attack: 'Attack',
    Defense: 'Defense',
    Special_Attack: 'Special Attack',
    Special_Defense: 'Special Defense',
    Speed: 'Speed'
    
  };

  return (
    <div>
      <HeaderDetails />
      <Container>
        <CardLeft>
        {pokemons.map((pokemon) => {
      if(name === pokemon.name){
        return <DivStats key={pokemon.id}>
          <TittleStats>Tamanho</TittleStats>
        <Stats>{pokemon.weight/10}kg</Stats>
        <Stats>{pokemon.height/10}m</Stats>
        <TittleStats>Habilidade</TittleStats>
        <DivStats>{pokemon.abilities.map((pokemon) => {
          return  <Stats key={pokemon.ability.name}>{pokemon.ability.name[0].toUpperCase() + pokemon.ability.name.slice(1)}</Stats>
        })}</DivStats>
         <TittleStats>Tipo</TittleStats>
        <DivStats>{pokemon.types.map((pokemon) => {
          return <Stats  key={pokemon.type.name}>  {pokemon.type.name[0].toUpperCase() + pokemon.type.name.slice(1)}</Stats>
        })}</DivStats>
    
        </DivStats>
        
      }
    })}
        </CardLeft>
        <CardCenter>

     {pokemons.map((pokemon) => {
      if(name === pokemon.name){
        return <DivCardCenter key={pokemon.id}>
        <ID>#{addZeroes(pokemon.id, 3)}</ID>
        <PokeImg src={pokemon.image} alt={pokemon.name} />
        <Name>{pokemon.name.toUpperCase()}</Name>
        
        
        </DivCardCenter>  
      }
    })}
        </CardCenter>
        
        <CardRight>
        
    <RadarChart
    captions={captions}
    data={data}
    size={350}
  />
        
        </CardRight>
      </Container>
      <CardBotton>

        <DivCard2>
        {pokemons.map((pokemon) => {
      if(name === pokemon.name){
        return <DivStats key={pokemon.id}>

        <DivStats>{pokemon.stats.map((pokemon) => {
          return  <Stats>{pokemon.base_stat}</Stats>
        })}</DivStats>
        </DivStats>
        
      }
    })}
        </DivCard2>
        <DivCard2>
        </DivCard2>
      </CardBotton>
    </div>
  );
}

export default DetailsPages;

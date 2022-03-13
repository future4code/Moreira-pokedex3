import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderDetails from '../../components/HeaderDetails';
import GlobalStateContext from '../../context/GlobalContext/GlobalStateContext';
import { CardCenter, ID, Name, CardLeft, DivMain, Stats, DivStats, TittleStats, PokeImg, CardRight, Container, DivCardCenter } from './styeld';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'



function DetailsPages() {

  const [pokemons] = useContext(GlobalStateContext)

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


  const teste = pokemons.filter((teste2) => {
    return name === teste2.name
  })

  console.log('aqui', teste[0])

  const HP = teste[0]?.stats[0].base_stat/125
  const Attack = teste[0]?.stats[1].base_stat/125
  const Defense = teste[0]?.stats[2].base_stat/125
  const Special_Attack = teste[0]?.stats[3].base_stat/125
  const Special_Defense = teste[0]?.stats[4].base_stat/125
  const Speed = teste[0]?.stats[5].base_stat/125 

  const data = [
    {
      data: {
        HP,
        Attack,
        Defense,
        Special_Attack,
        Special_Defense,
        Speed
      },
      meta: { color: "#E2BB25"},
    }    
  ];

const captions = {
    Special_Attack: 'Ataque Especial',
    Attack: 'Ataque',
    Defense: 'Defense',
    Special_Defense: 'Defesa Especial',
    Speed: 'Velocidade',
    HP: 'Vida'
    
  };

  const options = {
    captionProps: () => ({
      textAnchor: 'middle',
      fontSize: 13.8,
      fontWeight: 'bold',
      fontFamily: 'sans-serif',
      fill: 'black'
    }),
    scaleProps:() => ({ className:'scale', fill:'black' })
  }

  return (
    <div>
      <HeaderDetails />
      <Container>
        <CardLeft>
        {pokemons.map((pokemon) => {
      if(name === pokemon.name){
        return <DivMain>
        <DivStats key={pokemon.id}>
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
        </DivMain>
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
        
    <RadarChart className='shape'
    captions={captions}
    data={data}
    size={400}
    options={options}
  />
        
        </CardRight>
      </Container>
      
    </div>
  );
}

export default DetailsPages;

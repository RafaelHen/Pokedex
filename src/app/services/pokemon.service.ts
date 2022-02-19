import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../types/pokemon.types';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

    pokemon: Pokemon[] = [];

  constructor(private HttpClient: HttpClient) { 
    this.carregarPokemons();
  }
  
   async carregarPokemons() {
    const requisicao = await this.HttpClient.get<any>('https://pokeapi.co/api/v2/pokemon/?limit=151').toPromise();


    this.pokemon = requisicao.results;

    console.log(requisicao)
  }


}

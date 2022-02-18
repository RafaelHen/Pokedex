import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass'],
})
export class PokemonCardComponent{
 

  @Input() pokemon: string;
  @Input() numero: number;  

  pegarImagemPokemon(){
    const numeroFormatacao = this.leadingZero(this.numero);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numeroFormatacao}.png`;
  }

  leadingZero(num:number, size:number = 3): string {
    let s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
}

import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { PokemonFetchService } from './pokemon-fetch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'physicsWallah';
  // pokemons=[];
  // pokemonView:boolean=false;
  // showPokemon:boolean=true;
  // pikachu:string='';
  // // data={};

  // constructor(private pokemonService: PokemonFetchService, private router:Router){

  // }

  // ngOnInit(){
  //   this.serviceCall();
  // }

  // serviceCall(){
  //   this.pokemonService.getPokemon().subscribe((data) =>{
  //     this.pokemons=data.results;
  //     console.log(this.pokemons);
  //   })

  // }

  // navigate(pokemon:string){
  //   this.router.navigate(['/pokemon']);
  //   this.showPokemon=false;
  //   // this.pokemonView=true;
  //   // this.pikachu=pokemon;
  //   // console.log(pokemon);
  // }
}

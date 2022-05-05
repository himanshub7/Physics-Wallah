import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {PokemonFetchService} from '../pokemon-fetch.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {
  @Input() index=0;
  @Output() showPokemon: EventEmitter<boolean>=new EventEmitter<boolean>();
  pokemons=[];
  serviceData=[];
  pokemonName:string='';
  abilities:any=[];
  forms:any=[];
  moves:any=[];
  sprites:any=[];
  species:string='';
  stats:any=[];
  types:any=[];
  form=[];
  height=0;
  weight=0;

  constructor(private router:Router,private pokemonService: PokemonFetchService) {
    // console.log(this.router.getCurrentNavigation()?.extras.state.example);
   }

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params:ParamMap) =>{
    //   console.log(params);
    // })
    // console.log(this.index+"index");
    this.serviceCall();

  }

  serviceCall(){
    this.pokemonService.getPokemon("https://pokeapi.co/api/v2/pokemon/"+String(this.index+1)+"/").subscribe((data) =>{
      this.serviceData=data;
      console.log(data);
      this.pokemonName=data['name'];
      this.height=data['height'];
      this.weight=data['weight'];
      this.species=data['species']['name'];
      for(let i=0;i<data['abilities'].length;i++){
        this.abilities.push(data['abilities'][i]['ability']['name']);
        console.log(this.forms);
      }
      for(let j=0;j<data['forms'].length;j++){
        this.forms.push(data['forms'][j]['name']);
      }
      for(let j=0;j<data['moves'].length;j++){
        this.moves.push(data['moves'][j]['move']['name']);
      }
      for(let j=0;j<data['stats'].length;j++){
        this.stats.push(data['stats'][j]['stat']['name']);
      }
      for(let j=0;j<data['types'].length;j++){
        this.types.push(data['types'][j]['type']['name']);
      }
        this.sprites.push(data['sprites']['front_default']);
        this.sprites.push(data['sprites']['front_female']);
        this.sprites.push(data['sprites']['front_shiny']);
        this.sprites.push(data['sprites']['front_shiny_female']);
        this.sprites.push(data['sprites']['back_default']);
        this.sprites.push(data['sprites']['back_female']);
        this.sprites.push(data['sprites']['back_shiny']);
        this.sprites.push(data['sprites']['back_shiny_female']);
    })
  }

  back(){
    this.showPokemon.emit(true);
  }

}

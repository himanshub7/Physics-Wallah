import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import {  Input, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import {PokemonFetchService} from '../pokemon-fetch.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  title = 'physicsWallah';
  pageValue:number=0;
  pokemons=[];
  showPokemons=[];
  pageLength:number=0;
  pokemonView:boolean=false;
  showPokemon:boolean=true;
  pikachu:any;
  lengthPage:number=0;
  public pages: number [] = []; 

  constructor(private pokemonService: PokemonFetchService, private router:Router){

  }

  ngOnInit(){
    this.serviceCall();
    
  }

  serviceCall(){
    this.pokemonService.getPokemon("https://pokeapi.co/api/v2/pokemon/").subscribe((data) =>{
      this.pokemons=data.results;
      this.pageLength=this.pokemons.length;
      this.lengthPage=this.pokemons.length;
      console.log(this.pokemons);
      this.getData(this.pageValue);
    })

  }

  getData(pageNum:number){
    if(pageNum == 0){
      this.showPokemons=this.pokemons.slice(0,4);
    }
    else if(pageNum == 1){
      this.showPokemons=this.pokemons.slice(4,8);
    }
    else if(pageNum == 2){
      this.showPokemons=this.pokemons.slice(8,12);
    }
    else if(pageNum == 3){
      this.showPokemons=this.pokemons.slice(12,16);
    }
    else if(pageNum == 4){
      this.showPokemons=this.pokemons.slice(16,20);
    }
  }

  onChangePrev(){
    if(this.pageValue<=4 && this.pageValue>0){
      this.pageValue-=1;
     this.getData(this.pageValue);
    }
  }

  onChangeNext(){
    if(this.pageValue<4 && this.pageValue>=0){
      this.pageValue+=1;
      this.getData(this.pageValue);
    }
  }

  clickBack(show:boolean){
    this.showPokemon=show;
  }

  navigate(index:Number,pokemon:never){
    this.showPokemon=false;
    this.pikachu=this.pokemons.indexOf(pokemon);
  }

  onPageChange(){
    console.log('pagination');

  }


}

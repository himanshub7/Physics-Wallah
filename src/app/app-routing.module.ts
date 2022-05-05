import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';

const routes: Routes = [
  {
    path:'pokemon',
    component: PokemonPageComponent
  },
  {
    path:'home',
    component: MainComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

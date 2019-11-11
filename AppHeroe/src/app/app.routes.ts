import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeinformationComponent } from './components/heroeinformation/heroeinformation.component';
import {BuscarHeroeComponent} from './components/buscar-heroe/buscar-heroe.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroeinformation/:id', component: HeroeinformationComponent },
    { path: 'buscarHeroe/:termino', component: BuscarHeroeComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);
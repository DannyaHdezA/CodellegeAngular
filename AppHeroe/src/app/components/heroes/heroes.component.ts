import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { HeroeService } from '../../services/heroe.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  public HeroesRecibidos:Array<any>=[];

  public loading: boolean = true;

  constructor(private router:Router, public _HeroeService: HeroeService) {}

  ngOnInit() {

    this.HeroesRecibidos = this._HeroeService.ReturnHeroes();

    setTimeout(() =>{

      this.loading = false;

    },1000);
  }

  public MandarInformacion(idHeroe){

    this.router.navigate(['heroeinformation',idHeroe])
  }
}

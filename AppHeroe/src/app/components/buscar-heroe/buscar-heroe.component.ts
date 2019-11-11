import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService } from '../../services/heroe.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',
  styles: []
})
export class BuscarHeroeComponent implements OnInit {

  private termino: string ="";
  public heroesFiltrados: any = {};
  public loading:boolean=true;

  constructor(private router:Router, private ActivatedRoute:ActivatedRoute, private _heroeService:HeroeService) {

    //subscribe se utiliza en programación asincrona
    this.ActivatedRoute.params.subscribe((terminoURL)=>{
      this.loading=true;
        this.termino = terminoURL.termino
      

      this.heroesFiltrados=this._heroeService.buscarHeroes(this.termino);
      this.loading=false;
    
    })
    
    
   }

   ngOnInit() {

    this.heroesFiltrados = this.heroesFiltrados.ReturnHeroes();

    setTimeout(() =>{

      this.loading = false;

    },1000);
  }

  public MandarInformacion(idHeroe){

    this.router.navigate(['heroeinformation',idHeroe])
  }

}

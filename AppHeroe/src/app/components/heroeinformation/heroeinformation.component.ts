import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService } from '../../services/heroe.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-heroeinformation',
  templateUrl: './heroeinformation.component.html',
  styleUrls: ['./heroeinformation.component.css']
})
export class HeroeinformationComponent implements OnInit {

public HeroeFiltrado:any={};

  constructor(private router:Router,private ActivedRouter:ActivatedRoute, private _HeroeService:HeroeService) { 

    const IdHeroeURL = this.ActivedRouter.snapshot.paramMap.get('id');
    
      this.HeroeFiltrado = this._HeroeService.BuscarHeroe(IdHeroeURL);
      console.log(this.HeroeFiltrado);
  }

  ngOnInit() {

  }

  public MandarAHeroes(){

    this.router.navigate(['heroes'])
  }

}

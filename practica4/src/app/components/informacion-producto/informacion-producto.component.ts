import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, Routes } from '@angular/router';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-informacion-producto',
  templateUrl: './informacion-producto.component.html',
  styleUrls: ['./informacion-producto.component.css']
})
export class InformacionProductoComponent implements OnInit {

  public ProductoFiltrado:any={};

  constructor(private router:Router,private ActivedRouter:ActivatedRoute, private _StoreService:StoreService) { 

    const IdProductoURL = this.ActivedRouter.snapshot.paramMap.get('id');
    this.ProductoFiltrado = this._StoreService.BuscarProducto(IdProductoURL);
      
  }

  ngOnInit() {
  }

  public MandarAProductos(){

    this.router.navigate(['store'])
  }

}

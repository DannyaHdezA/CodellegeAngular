import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

    public ProductosRecibidos:Array<any>=[];

    public loading: boolean = true;
  
    constructor(private router:Router,public _StoreService: StoreService) { }

    public getWidth(valor){
        let porcentaje = (valor*100)/5;
        return `${porcentaje}%`;
    }

  ngOnInit() {
    
    this.ProductosRecibidos = this._StoreService.ReturnProductos();
    setTimeout(() =>{

      this.loading = false;
      
    },1000);
  }

  public MandarInformacion(idProducto){

    this.router.navigate(['informacionProducto',idProducto])
  }

}

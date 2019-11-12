import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Nombre:string="Dannya Susana Hernández Angeles";
  public arreglo:Array<number>=[1,2,3,4,5,6,7,8,9,10];
  public pi:number=Math.PI; 
  public porcentaje: number = 0.245;
  public salario: number = 1234.5;
  public fecha= new Date();

  public persona={
    nombre:'Dannya',
    edad:'23',
    direccion:{
      calle:'Jacaranda',
      numero:'316',
      frac: 'Las Arboledas'
    }
  }
  
  public nombre2:string='DaNNya sUsaNA HeRNándEZ AnGeLeS';

  public Activar:boolean=false; 

  public video:string="uh4dTLJ9q9o"

}


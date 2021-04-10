import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent  {
 
  nuevo : Personaje = {
    nombre : 'Maestro Roshi',
    poder : 1000
  }
  // get personajes() : Personaje[]{
  //   return this.DbzService.personajes;
  // }
  

  // agregarNuevoPersonaje(argumento :Personaje){
  //   console.log(argumento);
  //   this.personajes.push(argumento);
  // }
  // constructor (private dbzService : DbzService){      //ESTO SE LLAMA INYECCION DE DEPENDENCIAS

  // }
  constructor(){}
  
 
}

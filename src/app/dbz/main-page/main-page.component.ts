import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent  {
 
  personajes : Personaje[] = [
    {
      nombre : 'Goku',
      poder : 15000
    },
    {
      nombre : 'Vegeta',
      poder : 9000
    } 
  ]

  nuevo : Personaje = {
    nombre : 'Maestro Roshi',
    poder : 1000
  }

  agregarNuevoPersonaje(argumento :Personaje){
    console.log(argumento);
    this.personajes.push(argumento);
  }
  constructor (private DbzService : DbzService){      //ESTO SE LLAMA INYECCION DE DEPENDENCIAS

  }
  
 
}

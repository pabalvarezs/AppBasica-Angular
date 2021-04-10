import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent  {

  @Input('data') nuevo :Personaje = {
    nombre : '',
    poder : 0
  };
  // @Output() onNuevoPersonaje : EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzservice : DbzService){}    //inyectamos el servicio o dependencia

  agregar( ){              //  agregar( event :any )
    // event.preventDefault();        //previene el comportamiento por defecto del evento que recibimos
    // console.log('hey....');
    // console.log(event)
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.dbzservice.agregarPersonaje(this.nuevo);

    // this.onNuevoPersonaje.emit( this.nuevo );
    // INICIALIZAMOS VACIO UNA VEZ CARGADO AL ARREGLO
    this.nuevo = {
      nombre : '',
      poder : 0
    }


  
  }

}

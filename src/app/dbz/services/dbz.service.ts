import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";
import { AgregarComponent } from '../agregar/agregar.component';


@Injectable()
export class DbzService{

    /* EN GENERAL EL ORDEN DE ESCRITURA DE LA CALSE SE ESCRIBEN 
        PROPIEDADES
        GET Y SET
        CONSTRUCTOR
        METODOS
    */
    private _personajes : Personaje[] = [
        {
        nombre : 'Goku',
        poder : 15000
        },
        {
        nombre : 'Vegeta',
        poder : 9000
        } 
    ]

    get personajes() : Personaje[] {
        return [...this._personajes];

    }

    constructor(){
        // console.log('servicio inicializado');
    }

    agregarPersonaje ( data : Personaje){
        this._personajes.push( data );                  //debe ser la propiedad privada, ya si elegimos el get solo va a cambiar cuando apliquemos el get

    }



}
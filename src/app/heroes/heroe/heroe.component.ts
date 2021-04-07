import { Component } from "@angular/core";



@Component({
    selector : 'app-heroe',
    templateUrl : 'heroe.component.html'

})
export class HeroeComponent{

    public nombre : string ='IronMan';
    edad : number = 45;

    get nombreCapitalizado() : string{               //get se comporta como una variable sin ( ) en el template
        return this.nombre.toUpperCase();
    }

    obtenerNombre () : string{
        return `${this.nombre} - ${ this.edad }`; // los backticks permiten insertar string
        // return this.nombre + ' - ' + this.edad;

    }
    cambiarNombre() : void{
        this.nombre = 'SpiderMan';
    }
    cambiarEdad() : void {
        this.edad = 30;
    }

    //one way databinding > Enlazado de una sola via signifca que las variables del ts solo cambian hacia el html , no de html a ts (two way databindig)


}
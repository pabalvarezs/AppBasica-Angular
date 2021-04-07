import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes : string[] = ['Spiderman', 'IronMan','Hulk','Thor','Capitan América'];
  heroeBorrado : string =''; 
    
  borrarHeroe ()  {     
    this.heroeBorrado = this.heroes.pop() ||'';
    console.log('borrando...');
    // console.log(heroeBorrado);
  }

  

}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';   //importamos la libreria
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({                                 // llamamos el decorador y lo configuramos
    declarations:[                          // las declaraciones indica que tiene el modulo, pe los componentes, pipes, etc
        HeroeComponent,
        ListadoComponent
    ],
    exports :[                              // que cosas quiero que sean visibles desde afuera
        ListadoComponent
    ],                                       
    imports: [                               // en imports van los modulos
        CommonModule                         // IMPORTAN LAS DIRECTIVAS DE ANGULAR COMO EL NGIF NGFOR      
    ]
})
export class HeroesModule{


}
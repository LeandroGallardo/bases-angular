import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {


  heroes: string[] = ['spiderman', 'iron man', 'hulk', 'thor'];
  herroBorrado: string = '';

  borrarHeroe() : void {
    const heroBorrado = this.heroes.shift()
    this.herroBorrado = heroBorrado || '';

  }
}

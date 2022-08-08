import { Component } from "@angular/core" 

@Component({
    selector: 'app-contador', 
    template:`
        <h1>{{ titulo }}</h1>
        <button (click)="acumular(base)"> +1</button>
        <span> {{ numero }} </span>
        <button (click)="acumular(-base)"> -1</button>
        <h1>{{base}}</h1>
    `
})

export class ContadorComponent {
    titulo : string = 'mis bases';
    numero : number = 10;
    base : number = 5;
  
    acumular(valor: number){
      this.numero += valor;
    }
}
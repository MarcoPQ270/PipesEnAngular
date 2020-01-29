import { Component } from '@angular/core';
import { resolve } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Marco";
  nombre2 = "MarCO VELazquez pQ"
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  //objeto para pipe Json bastante util

  heroe = {
    nombre: 'Bruce Wayne',
    clave: 'Batman',
    edad: 45,

    direccion: {
      calle: 'Gotica',
      casa: '19'
    }

  }


  valorDePromesa = new Promise( (resolve, reject) =>{
    setTimeout( () => resolve('llego la data'), 3500);
  });


  fecha = new Date();

  video = "foE1mO2yM04";

  activar: boolean = true;
}

import { Pipe, PipeTransform } from '@angular/core';

// se importa el platform-browser y DomSanitizer
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  // se define el costuctor para utilizar el DomSanitizer
constructor(private domSanitizer: DomSanitizer){

}
// se recibe un valor y un argumento
  transform(value: string, url: string): any {
    // retornamos el this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}

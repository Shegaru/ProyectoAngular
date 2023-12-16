import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpace', //<== Este es el nombre del pipe
  standalone: true
})
export class ReplaceSpacePipe implements PipeTransform {

  //cuando la persona escriba por ejemplo un nickname como 'hola soy pepe', entonces que cambie los espacios por guion ==> hola-soy-pepe
  transform(value: string, args:string): string {
    value = value.split(' ').join(args).toLocaleLowerCase();
    console.log({value});
    return value;
  }

}

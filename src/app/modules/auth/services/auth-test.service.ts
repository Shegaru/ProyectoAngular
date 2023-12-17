import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, delay, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthTestService {

  constructor() { }


  public uniqueEmailValidator () : AsyncValidatorFn {
    return (control : AbstractControl) : Observable<ValidationErrors | null> => { //trae el los valores del formulario y los mete dentro de un observable
      return of(control.value)
      .pipe(
        delay(500),
        map((email) => { //en el observable se valida si en esete caso, el usuario ya se encuentra en el sistema
          const emails = ['usuario666@gmail.com', 'usuario20@gmail.com'];
          return emails.includes(email); //aqui es donde manda si esta incluido o no el email
        })
      ).pipe( //aqui ya valida si esta repetido o no, si no esta repetido, devuelve null, si no devuelve emailExists
        map((exists) => (exists ? {emailExists:true} : null))
      )
    }
  }
}

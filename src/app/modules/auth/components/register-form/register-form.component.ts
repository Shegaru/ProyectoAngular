import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthTestService } from '@modules/auth/services/auth-test.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

  registerForm : FormGroup = new FormGroup({});

  constructor (private authService : AuthTestService){}

  ngOnInit(): void {

    this.registerForm = new FormGroup(
      {
        email : new FormControl('', {
          validators: [
            Validators.required
            , Validators.email
          ],
          asyncValidators : this.authService.uniqueEmailValidator(),
          updateOn : 'blur' //este es para modificar el disparador del evento
        }),
        name : new FormControl('', [
                                      Validators.required
                                      , Validators.minLength(3)
                                    ]),
        lastName : new FormControl('', [
                                      Validators.required
                                      , Validators.minLength(3)
                                    ]),
        phone : new FormControl('', [
                                      Validators.required
                                      , Validators.minLength(3)
                                    ]),
        aboutMe : new FormControl('', [
                                      Validators.required
                                      , Validators.minLength(3)
                                    ]),

/*         password : new FormControl('', [Validators.required, Validators.minLength(3)]),
        passwordConfirm : new FormControl('', [Validators.required, Validators.minLength(3)]) */

      },
      {
        validators:passwordMatchValidator,
        // updateOn : 'blur'  si se desea agregar el tip ode disparador a todo el grupo del formulario, se agrega acá
      }
    )

    const formControlPhone = this.registerForm.get('phone') as FormControl;
      formControlPhone.valueChanges.subscribe((res) => {
        console.log('aqui salen las propiedades de phone', res);
      })

      this.registerForm.valueChanges.subscribe((res) => {
        console.log('aqui salen las propiedades de todo el formulario', res);
      })


  }


  testLoaded():void{
    const mockData = {
      email : 'scardonaca@outlook.com',
      name : 'Stiven',
      lastName : 'Cardona',
      phone : '3224234323',
      aboutMe : 'Hola soy Stiven'
    }

    this.registerForm.setValue(mockData); //con el setvalue se debe enviar la data completa del formulario, si tiene 5 inputs se debe enviar 5 valores con el mismo nombre
  }

  testUploaded():void{
    const mockData = {
      phone : '34324354545454554',

    }

    this.registerForm.patchValue(mockData); //Este se utiliza para actualizar alguno de lso cmapos del formulario
  }
}

function passwordMatchValidator(g: AbstractControl | FormGroup) : any {
  return g.get('password')?.value === g.get('passwordConfirm')?.value
     ? null : {'mismatch': true};
}


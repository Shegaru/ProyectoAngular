import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  loginForm : FormGroup = new FormGroup({});

  constructor(){

  }

  ngOnInit(): void {
    //una funcion que se ejecuta cuando el componente se invoca
    //llamado ideal para hacer llamados a APIs
    //para cambiar datos en pantalla
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required
                                  ,Validators.email]),
      password: new FormControl('', [Validators.required
                                    , Validators.minLength(5)
                                    , Validators.maxLength(12)])
    });
  }

  sendCredentials():void{
    const body = this.loginForm.value;
    console.log(body);
  }

}

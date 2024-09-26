import { Component } from '@angular/core';
import {RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor() {}
  loggedIn=false;
  onSubmit() {
    // Aquí puedes manejar el evento de envío del formulario
    console.log('Formulario enviado');
  }

  greet(){
    this.loggedIn=true;
    alert('holi');
  }
  openRegister(){

  }

}

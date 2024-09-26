import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  constructor() {}

  onSubmit() {
    // Aquí puedes manejar el evento de envío del formulario
    console.log('Formulario de registro enviado');
  }
}

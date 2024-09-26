import { Component } from '@angular/core';
import {RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username === 'admin' && this.password === '1234') {
      // Redirige a adminDashBoard si las credenciales son correctas
      this.router.navigate(['/adminDashBoard']);
    }else if(this.username === 'juan' && this.password === '1234') {
      this.router.navigate(['/user']);  
    }else {
      // Maneja el error si las credenciales son incorrectas
      alert('Usuario o contraseña incorrectos');
    }
  }
}

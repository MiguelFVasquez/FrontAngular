import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { provideRouter, RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginComponent, RegistroComponent,RouterModule,AdminHeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'borradorAngular';
}

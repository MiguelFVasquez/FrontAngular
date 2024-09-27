import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { EventCardComponent } from './event-card/event-card.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { UserComponent } from './user/user.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  {path: 'evento', component:EventCardComponent},
  { path: 'mi-cuenta', component: MiCuentaComponent },
  {
    path: 'admin', // Ruta principal para el administrador
    component: AdminHeaderComponent, // Siempre muestra el header
    children: [
      { path: 'dashboard', component: AdminDashBoardComponent }, // Carga el dashboard como hijo
    ]
  },
  {path: 'user', component:UserComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

import { Component } from '@angular/core';
import { EventCardComponent } from '../event-card/event-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dash-board',
  standalone: true,
  imports: [EventCardComponent,RouterModule],
  templateUrl: './admin-dash-board.component.html',
  styleUrl: './admin-dash-board.component.css'
})
export class AdminDashBoardComponent {
  events = [
    { title: 'Evento 1', description: 'Descripción del evento 1', date: new Date() },
    { title: 'Evento 2', description: 'Descripción del evento 2', date: new Date() },
    { title: 'Evento 3', description: 'Descripción del evento 3', date: new Date() }
  ];
}

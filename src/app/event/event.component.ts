import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  events = [
    { name: 'Tech Summit', category: 'Technology', location: 'Bangalore', date: '2025-10-12' },
    { name: 'Art Expo', category: 'Art', location: 'Delhi', date: '2025-11-05' }
  ];
}

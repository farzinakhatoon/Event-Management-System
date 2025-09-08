import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notification',
  standalone: true,
  templateUrl: './notification.component.html',
  styleUrls: [],
  imports:[FormsModule, NgFor]

})
export class NotificationComponent {
  notifications = [
    {
      message: 'Tech Summit starts in 2 days!',
      timestamp: '2025-09-10 10:00 AM'
    },
    {
      message: 'Art Expo registration closes tomorrow.',
      timestamp: '2025-09-09 6:00 PM'
    }
  ];
}

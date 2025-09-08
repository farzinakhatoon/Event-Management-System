import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Ticket{
  event: string;
  date: string;
  status: string;
}

@Component({
  selector: 'app-ticket',
  standalone: true,
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
  imports:[FormsModule,NgIf,NgFor]
})

export class TicketComponent {
  selectedEvent = '';
  bookingDate = '';
  tickets: Ticket[] = [];

  bookTicket() {
    const newTicket:Ticket = {
      event: this.selectedEvent,
      date: this.bookingDate,
      status: 'Confirmed'
    };
    this.tickets.push(newTicket);
    this.selectedEvent = '';
    this.bookingDate = '';
  }

  cancelTicket(index: number) {
    this.tickets[index].status = 'Canceled';
  }
}

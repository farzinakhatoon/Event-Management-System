import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

export interface Feedback{
  event:string;
  rating:number;
  comments:string;
}
@Component({
  selector: 'app-feedback',
  standalone: true,
  templateUrl: './feedback.component.html',
  styleUrls: [],
  imports:[FormsModule,NgFor]
})
export class FeedbackComponent {
  feedbackList : Feedback[] = [];
  userFeedback = {
    event: '',
    rating: 0,
    comments: ''
  };

  submitFeedback() {
    this.feedbackList.push({ ...this.userFeedback });
    this.userFeedback = { event: '', rating: 0, comments: '' };
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports:[FormsModule]
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: '',
    contactNumber: ''
  };

  register() {
    console.log('User Registered:', this.user);
    alert('Registration successful!');
  }
}

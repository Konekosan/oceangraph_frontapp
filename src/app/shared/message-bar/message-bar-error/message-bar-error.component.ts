import { Component } from '@angular/core';

@Component({
  selector: 'app-message-bar-error',
  standalone: true,
  imports: [],
  templateUrl: './message-bar-error.component.html',
  styleUrl: './message-bar-error.component.css'
})
export class MessageBarErrorComponent {
  message: string= "Error lors de la modification";
}

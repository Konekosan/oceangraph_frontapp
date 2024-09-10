import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-bar-success',
  standalone: true,
  imports: [],
  templateUrl: './message-bar-success.component.html',
  styleUrl: './message-bar-success.component.css'
})
export class MessageBarSuccessComponent {
  @Input() message: string;
} 

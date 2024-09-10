import { Component } from '@angular/core';
import { MessageBarErrorComponent } from './message-bar-error/message-bar-error.component';
import { MessageBarSuccessComponent } from './message-bar-success/message-bar-success.component';
import { MessageBarInfoComponent } from './message-bar-info/message-bar-info.component';
import { MessageBarService } from './message-bar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-bar',
  standalone: true,
  imports: [MessageBarErrorComponent,
            MessageBarSuccessComponent,
            MessageBarInfoComponent,
            CommonModule
  ],
  templateUrl: './message-bar.component.html',
  styleUrl: './message-bar.component.css'
})
export class MessageBarComponent {
  showMessageBarError: boolean = false;
  showMessageBarInfo: boolean = false;
  showMessageBarSuccess: boolean = false;

  constructor(public messageBarService: MessageBarService){}

  toggleMessageBarError(message: string): void {
    this.messageBarService.setMessage(message);
    this.messageBarService.toggleMessageBarError();
  }

  toggleMessageBarInfo(message: string): void {
    this.messageBarService.setMessage(message);
    this.messageBarService.toggleMessageBarInfo();
  }

  toggleMessageBarSuccess(message: string): void {
    console.log('aaa');
    this.messageBarService.setMessage(message);
    this.messageBarService.toggleMessageBarSuccess();
  }
}

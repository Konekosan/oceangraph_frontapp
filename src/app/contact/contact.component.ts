import { Component } from '@angular/core';
import { MaterialModule } from 'src/_module/Material.Module';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  firstNameAutofilled: boolean;

  constructor() {
  }

  test(event: any){
    console.log(event);
  }
}

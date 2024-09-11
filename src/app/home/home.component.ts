import { Component } from '@angular/core';
import { AppFooterComponent } from '../app-footer/app-footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppFooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

}

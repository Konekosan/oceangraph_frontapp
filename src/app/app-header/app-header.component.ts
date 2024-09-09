import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialModule } from 'src/_module/Material.Module';

@Component({
  selector: 'app-app-header',
  standalone: true,
  imports: [MaterialModule, RouterLink],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css'
})

export class AppHeaderComponent {

  title='OceanGraph Custom';

}

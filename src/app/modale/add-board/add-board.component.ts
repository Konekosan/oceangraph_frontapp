import { Component } from '@angular/core';
import { MaterialModule } from 'src/_module/Material.Module';

@Component({
  selector: 'app-add-board',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './add-board.component.html',
  styleUrl: './add-board.component.css'
})
export class AddBoardComponent {

  constructor() {
    console.log('coucou');
  }

}

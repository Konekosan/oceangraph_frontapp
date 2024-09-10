import { Component, inject, model } from '@angular/core';
import { MaterialModule } from 'src/_module/Material.Module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-board',
  standalone: true,
  imports: [FormsModule, MaterialModule],
  templateUrl: './add-board.component.html',
  styleUrl: './add-board.component.css'
})

export class AddBoardComponent {
  readonly dialogRef = inject(MatDialogRef<AddBoardComponent>);
  readonly data = inject(MAT_DIALOG_DATA);
  readonly name = model(this.data.name);
  readonly brand = model(this.data.brand);
  readonly shape = model(this.data.shape);

  onNoClick(): void {
    console.log(this.data);
    this.dialogRef.close();
  }

  closeModale() {
  }
}

import { Component, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from 'src/_module/Material.Module';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {

  readonly data = inject(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<ConfirmationComponent>);

  onYesClick(): void {
    console.log(this.data);
    this.dialogRef.close();
  }


}

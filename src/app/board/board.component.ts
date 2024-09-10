import { Component, OnInit, ViewChild, OnDestroy, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

import { BoardService } from './board.service';
import { MaterialModule } from 'src/_module/Material.Module';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddBoardComponent } from '../modale/add-board/add-board.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, 
            MaterialModule, 
            MatDialogModule,
            AddBoardComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})

export class BoardComponent implements OnInit, OnDestroy{

  postData: any;
  columnsBoard: string[] = ['id', 'name', 'brand', 'shape'];
  private subscription!: Subscription;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  readonly dialog = inject(MatDialog);

  constructor(private boardService: BoardService) {
  }

  addBoardModale() {
    const dialogRef = this.dialog.open(AddBoardComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    this.loadBoards();
  }

  loadBoards() {
    this.subscription = this.boardService.fetch_all_boards().subscribe((data: any) => {
      this.postData = data[0];
      this.postData = new MatTableDataSource(data[0]);
      this.postData.paginator = this.paginator;
      this.postData.sort = this.sort;
    });
  }

  ngOnDestroy(){
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  addModale() {

  }

}

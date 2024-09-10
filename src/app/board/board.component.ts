import { Component, OnInit, ViewChild, ChangeDetectionStrategy, 
         OnDestroy, inject, signal, model } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

import { BoardService } from './board.service';
import { MaterialModule } from 'src/_module/Material.Module';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddBoardComponent } from '../modale/add-board/add-board.component';
import { ConfirmationComponent } from '../modale/confirmation/confirmation.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, 
            MaterialModule, 
            MatDialogModule,
            AddBoardComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BoardComponent implements OnInit, OnDestroy{

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  postData: any;
  columnsBoard: string[] = ['id', 'name', 'brand', 'shape', 'actions'];
  private subscription!: Subscription;
  readonly dialog = inject(MatDialog);
  readonly name = model('');
  readonly brand = model('');
  readonly shape = model('');

  constructor(private boardService: BoardService) {
  }

  addBoardModale() {
    const dialogRef = this.dialog.open(AddBoardComponent, {
      data: { name: this.name(), 
              brand: this.brand(),
              shape: this.shape()
            },
    });

    dialogRef.afterClosed().subscribe(result => {
      const formattedData = {
        'parameter': result
      };
      if (result !== undefined) {
          this.boardService.addNewBoard(formattedData).subscribe(
            response => {
              console.log(response);
            }
          );
      }
    });
  }

  ngOnInit(): void {
    this.loadBoards();
  }

  loadBoards() {
    this.subscription = this.boardService.fetchAllBoards().subscribe((data: any) => {
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

  deleteBoard(event: any) {
    const boardId = event.id;
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      data: 'delete'
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.boardService.deleteBoardById(boardId).subscribe(
          response => {
            console.log(response);
          }
        );        
      }
    });
  }

  editBoard(event: any){
    console.log(event);
  }
}

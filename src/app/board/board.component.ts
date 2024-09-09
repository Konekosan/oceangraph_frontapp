import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

import { BoardService } from './board.service';
import { MaterialModule } from 'src/_module/Material.Module';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})

export class BoardComponent implements OnInit, OnDestroy{

  postData: any;
  columnsBoard: string[] = ['id', 'name', 'brand', 'shape'];
  private subscription!: Subscription;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private boardService: BoardService) {
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

}

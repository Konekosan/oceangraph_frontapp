import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  baseUrl : string = 'http://localhost:8000/';
  boardUrl : string = this.baseUrl + 'planche/';
  addBoardUrl : string = this.boardUrl + 'add';
  header_node = {
    Accept: 'application/json',
  }

  constructor(private http: HttpClient) { }

  fetchAllBoards() {
    return this.http.get(this.boardUrl)
  }

  addNewBoard(data: any){
    return this.http.post(this.addBoardUrl, data, { headers: this.header_node })
  }

  deleteBoardById(id_board: string) {
    return this.http.delete(this.boardUrl + id_board, { headers: this.header_node }).pipe(
      catchError(error => {
        console.error('Error occurred while deleting user:', error);
        return throwError(error);
      })
    );

  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Board } from '../model/board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  baseUrl : string = 'http://localhost:8000';
  boardUrl : string = this.baseUrl + '/planche';
  addBoardUrl : string = this.boardUrl + '/add';
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

}

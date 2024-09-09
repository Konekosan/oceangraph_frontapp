import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Board } from '../model/board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  base_url : string = 'http://localhost:8000';
  board_url : string = this.base_url + '/planche';

  constructor(private http: HttpClient) { }

  fetch_all_boards() {
    return this.http.get(this.board_url)
  }

}

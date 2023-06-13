import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TogglePlayerService {

  firstPlayer: boolean = true;
  secondPlayer: boolean = false;
  firstPlayerScore: number = 0;
  secondPlayerScore: number = 0;

  constructor() {}
  
}
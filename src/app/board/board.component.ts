import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  boxItems: any[] = Array(9).fill(0);

  currentTurnNumber: number = 0;
  currentBox: number = 0;
  isBoxXPress: boolean[] = [false, false, false, false, false, false, false, false, false];
  isBoxOPress: boolean[] = [false, false, false, false, false, false, false, false, false];

  clickedBox(index: number) {
    if (this.currentTurnNumber < 9) {
      if (
        (this.currentTurnNumber % 2 === 0) &&
        !this.isBoxXPress[index]
      ) {
        this.isBoxXPress[index] = true;
      } else if (
        (this.currentTurnNumber % 2 !== 0) &&
        !this.isBoxOPress[index]
      ) {
        this.isBoxOPress[index] = true;
      }
      this.currentTurnNumber++;
    }
  }
}

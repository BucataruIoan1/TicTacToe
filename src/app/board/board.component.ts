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
  winningCombinations: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  isBoxDisabled: boolean[] = [false, false, false, false, false, false, false, false, false];

  clickedBox(index: number) {
    if(!this.isBoxDisabled[index]) {
      this.isBoxDisabled[index] = true;
    }
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

      this.checkWinningCondition();
    }
  }

  checkWinningCondition() {
    for (let combination of this.winningCombinations) {
      let box1 = combination[0];
      let box2 = combination[1];
      let box3 = combination[2];
  
      if (
        this.isBoxXPress[box1] &&
        this.isBoxXPress[box2] &&
        this.isBoxXPress[box3]
      ) {
        // X player wins
        console.log("X player wins");
        this.resetGame();
      } else if (
        this.isBoxOPress[box1] &&
        this.isBoxOPress[box2] &&
        this.isBoxOPress[box3]
      ) {
        // O player wins
        console.log("O player wins");
        this.resetGame();
      }
    }
  }

  resetGame() {
    for(let i = 0; i < this.isBoxXPress.length; i++) {
      setTimeout(() => {
        this.isBoxOPress[i] = false;
        this.isBoxXPress[i] = false;
        this.isBoxDisabled[i] = false;
        this.currentTurnNumber = 0;
      }, 1500)

    }
  }
}

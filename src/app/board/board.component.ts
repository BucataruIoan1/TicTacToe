import { Component, OnInit } from '@angular/core';
import { TogglePlayerService } from '../toggle-player.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(private togglePlayerService: TogglePlayerService) { }

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
  isGameOver: boolean = false;
  isStrikeRow1: boolean = false;
  isStrikeRow2: boolean = false;
  isStrikeRow3: boolean = false;
  isStrikeColumn1: boolean = false;
  isStrikeColumn2: boolean = false;
  isStrikeColumn3: boolean = false;
  isStrikeDiagonal1: boolean = false;
  isStrikeDiagonal2: boolean = false;

  clickedBox(index: number) {
    if(!this.isGameOver) {
      if(!this.isBoxDisabled[index]) {
        this.isBoxDisabled[index] = true;
      }
      if (this.currentTurnNumber < 9) {
        if (
          (this.currentTurnNumber % 2 === 0) &&
          !this.isBoxXPress[index]
        ) {
          this.isBoxXPress[index] = true;
          this.togglePlayerService.firstPlayer = false;
          this.togglePlayerService.secondPlayer = true;
        } else if (
          (this.currentTurnNumber % 2 !== 0) &&
          !this.isBoxOPress[index]
        ) {
          this.isBoxOPress[index] = true;
          this.togglePlayerService.secondPlayer = false;
          this.togglePlayerService.firstPlayer = true;
        }
        this.currentTurnNumber++;
  
        this.checkWinningCondition();
    }
    
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
        if(this.isBoxXPress[box1] === this.isBoxXPress[0] && this.isBoxXPress[box1] === this.isBoxXPress[1] && 
          this.isBoxXPress[box1] === this.isBoxXPress[2]) {
            this.isStrikeRow1 = true;
        } else if(this.isBoxXPress[box1] === this.isBoxXPress[3] && this.isBoxXPress[box1] === this.isBoxXPress[4] && 
          this.isBoxXPress[box1] === this.isBoxXPress[5]) {
            this.isStrikeRow2 = true;
        } else if(this.isBoxXPress[box1] === this.isBoxXPress[6] && this.isBoxXPress[box1] === this.isBoxXPress[7] && 
          this.isBoxXPress[box1] === this.isBoxXPress[8]) {
            this.isStrikeRow3 = true;
        } else if(this.isBoxXPress[box1] === this.isBoxXPress[0] && this.isBoxXPress[box1] === this.isBoxXPress[3] && 
          this.isBoxXPress[box1] === this.isBoxXPress[6]) {
            this.isStrikeColumn1 = true;
        } else if(this.isBoxXPress[box1] === this.isBoxXPress[1] && this.isBoxXPress[box1] === this.isBoxXPress[4] && 
          this.isBoxXPress[box1] === this.isBoxXPress[7]) {
            this.isStrikeColumn2 = true;
        } else if(this.isBoxXPress[box1] === this.isBoxXPress[2] && this.isBoxXPress[box1] === this.isBoxXPress[5] && 
          this.isBoxXPress[box1] === this.isBoxXPress[8]) {
            this.isStrikeColumn3 = true;
        } else if(this.isBoxXPress[box1] === this.isBoxXPress[0] && this.isBoxXPress[box1] === this.isBoxXPress[4] && 
          this.isBoxXPress[box1] === this.isBoxXPress[8]) {
            this.isStrikeDiagonal1 = true;
        } else if(this.isBoxXPress[box1] === this.isBoxXPress[2] && this.isBoxXPress[box1] === this.isBoxXPress[4] && 
          this.isBoxXPress[box1] === this.isBoxXPress[6]) {
            this.isStrikeDiagonal2 = true;
        }
        
        this.isGameOver = true;
        this.togglePlayerService.firstPlayer = false;
        this.togglePlayerService.secondPlayer = false;
        this.togglePlayerService.firstPlayerScore++;
      } else if (
        this.isBoxOPress[box1] &&
        this.isBoxOPress[box2] &&
        this.isBoxOPress[box3]
      ) {
        // O player wins
        console.log("O player wins");
        if(this.isBoxOPress[box1] === this.isBoxOPress[0] && this.isBoxOPress[box1] === this.isBoxOPress[1] && 
          this.isBoxOPress[box1] === this.isBoxOPress[2]) {
            this.isStrikeRow1 = true;
        } else if(this.isBoxOPress[box1] === this.isBoxOPress[3] && this.isBoxOPress[box1] === this.isBoxOPress[4] && 
          this.isBoxOPress[box1] === this.isBoxOPress[5]) {
            this.isStrikeRow2 = true;
        } else if(this.isBoxOPress[box1] === this.isBoxOPress[6] && this.isBoxOPress[box1] === this.isBoxOPress[7] && 
          this.isBoxOPress[box1] === this.isBoxOPress[8]) {
            this.isStrikeRow3 = true;
        } else if(this.isBoxOPress[box1] === this.isBoxOPress[0] && this.isBoxOPress[box1] === this.isBoxOPress[3] && 
          this.isBoxOPress[box1] === this.isBoxOPress[6]) {
            this.isStrikeColumn1 = true;
        } else if(this.isBoxOPress[box1] === this.isBoxOPress[1] && this.isBoxOPress[box1] === this.isBoxOPress[4] && 
          this.isBoxOPress[box1] === this.isBoxOPress[7]) {
            this.isStrikeColumn2 = true;
        } else if(this.isBoxOPress[box1] === this.isBoxOPress[2] && this.isBoxOPress[box1] === this.isBoxOPress[5] && 
          this.isBoxOPress[box1] === this.isBoxOPress[8]) {
            this.isStrikeColumn3 = true;
        } else if(this.isBoxOPress[box1] === this.isBoxOPress[0] && this.isBoxOPress[box1] === this.isBoxOPress[4] && 
          this.isBoxOPress[box1] === this.isBoxOPress[8]) {
            this.isStrikeDiagonal1 = true;
        } else if(this.isBoxOPress[box1] === this.isBoxOPress[2] && this.isBoxOPress[box1] === this.isBoxOPress[4] && 
          this.isBoxOPress[box1] === this.isBoxOPress[6]) {
            this.isStrikeDiagonal2 = true;
        }
        this.isGameOver = true;
        this.togglePlayerService.firstPlayer = false;
        this.togglePlayerService.secondPlayer = false;
        this.togglePlayerService.secondPlayerScore++;
      }
    }
  }

  resetGame() {
    this.togglePlayerService.firstPlayer = true;
    this.togglePlayerService.secondPlayer = false;
    for(let i = 0; i < this.isBoxXPress.length; i++) {
      setTimeout(() => {
        this.isBoxOPress[i] = false;
        this.isBoxXPress[i] = false;
        this.isBoxDisabled[i] = false;
        this.currentTurnNumber = 0;
        this.isStrikeRow1 = false;
        this.isStrikeRow2 = false;
        this.isStrikeRow3 = false;
        this.isStrikeColumn1 = false;
        this.isStrikeColumn2 = false;
        this.isStrikeColumn3 = false;
        this.isStrikeDiagonal1 = false;
        this.isStrikeDiagonal2 = false;
        this.isGameOver = false;
      }, 500)

    }
  }
}

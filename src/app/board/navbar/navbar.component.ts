import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isFirstPlayer: boolean = true;
  isSecondPlayer: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  switchPlayer(): void {
    this.isFirstPlayer = !this.isFirstPlayer;
    this.isSecondPlayer = !this.isSecondPlayer;
  }

}

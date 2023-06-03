import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-tracker',
  templateUrl: './player-tracker.component.html',
  styleUrls: ['./player-tracker.component.css']
})
export class PlayerTrackerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() isFirstPlayer : boolean = true;
  @Input() isSecondPlayer : boolean = false;

}

import { Component, OnInit, Input } from '@angular/core';
import { TogglePlayerService } from 'src/app/toggle-player.service';

@Component({
  selector: 'app-player-tracker',
  templateUrl: './player-tracker.component.html',
  styleUrls: ['./player-tracker.component.css']
})
export class PlayerTrackerComponent implements OnInit {


  constructor(public togglePlayerService: TogglePlayerService) { }

  ngOnInit(): void {

  }

}

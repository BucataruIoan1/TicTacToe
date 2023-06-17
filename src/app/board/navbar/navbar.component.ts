import { Component, OnInit} from '@angular/core';
import { TogglePlayerService } from 'src/app/toggle-player.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public togglePlayerService: TogglePlayerService) { }

  ngOnInit(): void {
  }

}

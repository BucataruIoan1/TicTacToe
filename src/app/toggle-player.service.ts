import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TogglePlayerService {

  firstPlayer: boolean = true;
  secondPlayer: boolean = false;

  constructor() {}
  
}
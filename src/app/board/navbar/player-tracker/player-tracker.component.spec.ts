import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTrackerComponent } from './player-tracker.component';

describe('PlayerTrackerComponent', () => {
  let component: PlayerTrackerComponent;
  let fixture: ComponentFixture<PlayerTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerTrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

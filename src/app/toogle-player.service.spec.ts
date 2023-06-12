import { TestBed } from '@angular/core/testing';

import { TogglePlayerService } from './toggle-player.service';

describe('TogglePlayerService', () => {
  let service: TogglePlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TogglePlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

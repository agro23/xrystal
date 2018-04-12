import { TestBed, inject } from '@angular/core/testing';

import { MessagerService } from './messager.service';

describe('MessagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagerService]
    });
  });

  it('should ...', inject([MessagerService], (service: MessagerService) => {
    expect(service).toBeTruthy();
  }));
});

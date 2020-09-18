import { TestBed } from '@angular/core/testing';
import { JwtAuthGuard } from './jwt-auth.guard';

describe('JwtAuthGuard', () => {
  let service: JwtAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtAuthGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

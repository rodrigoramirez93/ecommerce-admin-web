import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRedirectionComponent } from './user-redirection.component';

describe('UserRedirectionComponent', () => {
  let component: UserRedirectionComponent;
  let fixture: ComponentFixture<UserRedirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRedirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRedirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

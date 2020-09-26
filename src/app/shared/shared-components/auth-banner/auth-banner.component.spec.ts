import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthBannerComponent } from './auth-banner.component';

describe('AuthBannerComponent', () => {
  let component: AuthBannerComponent;
  let fixture: ComponentFixture<AuthBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { managementComponent } from './management.component';

describe('managementComponent', () => {
  let component: managementComponent;
  let fixture: ComponentFixture<managementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ managementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(managementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

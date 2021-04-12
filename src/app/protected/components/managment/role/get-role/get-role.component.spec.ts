import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRoleComponent } from './get-role.component';

describe('GetRoleComponent', () => {
  let component: GetRoleComponent;
  let fixture: ComponentFixture<GetRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

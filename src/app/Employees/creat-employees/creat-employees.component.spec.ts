import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatEmployeesComponent } from './creat-employees.component';

describe('CreatEmployeesComponent', () => {
  let component: CreatEmployeesComponent;
  let fixture: ComponentFixture<CreatEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

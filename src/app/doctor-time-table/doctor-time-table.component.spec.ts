import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorTimeTableComponent } from './doctor-time-table.component';

describe('DoctorTimeTableComponent', () => {
  let component: DoctorTimeTableComponent;
  let fixture: ComponentFixture<DoctorTimeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorTimeTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorTimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

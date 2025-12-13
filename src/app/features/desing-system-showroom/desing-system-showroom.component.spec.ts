import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesingSystemShowroomComponent } from './desing-system-showroom.component';

describe('DesingSystemShowroomComponent', () => {
  let component: DesingSystemShowroomComponent;
  let fixture: ComponentFixture<DesingSystemShowroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesingSystemShowroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesingSystemShowroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericsHeaderComponent } from './generics-header.component';

describe('GenericsHeaderComponent', () => {
  let component: GenericsHeaderComponent;
  let fixture: ComponentFixture<GenericsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GenericsHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

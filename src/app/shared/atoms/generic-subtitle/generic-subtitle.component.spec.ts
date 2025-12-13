import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericSubtitleComponent } from './generic-subtitle.component';

describe('GenericSubtitleComponent', () => {
  let component: GenericSubtitleComponent;
  let fixture: ComponentFixture<GenericSubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GenericSubtitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

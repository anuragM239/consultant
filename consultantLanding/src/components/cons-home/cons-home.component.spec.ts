import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsHomeComponent } from './cons-home.component';

describe('ConsHomeComponent', () => {
  let component: ConsHomeComponent;
  let fixture: ComponentFixture<ConsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

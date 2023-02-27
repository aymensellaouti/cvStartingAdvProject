import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorUtComponent } from './color-ut.component';

describe('ColorUtComponent', () => {
  let component: ColorUtComponent;
  let fixture: ComponentFixture<ColorUtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorUtComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have p with initial color red', () => {
    /*
      Select p
      vérify backgroundColor
    */
    expect(component).toBeTruthy();
  });

  it('should have p with color yellow after click', () => {
    /*
      Select p
      click
      trigger changeDetection
      vérify backgroundColor
    */
    expect(component).toBeTruthy();
  });
});

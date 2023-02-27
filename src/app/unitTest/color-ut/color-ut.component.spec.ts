import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorUtComponent } from './color-ut.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('ColorUtComponent', () => {
  let component: ColorUtComponent;
  let fixture: ComponentFixture<ColorUtComponent>;
  let el: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorUtComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorUtComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
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
    const paragraph = el.query(By.css(`[data-testid=para]`));
    expect(paragraph.nativeElement.style['background-color']).toBe('red');
  });

  it('should have p with color yellow after click', () => {
    /*
      Select p
      click
      trigger changeDetection
      vérify backgroundColor
    */
    const paragraph = el.query(By.css(`[data-testid=para]`));
    paragraph.nativeElement.click();
    fixture.detectChanges();
    expect(paragraph.nativeElement.style['background-color']).toBe('yellow');
  });
});

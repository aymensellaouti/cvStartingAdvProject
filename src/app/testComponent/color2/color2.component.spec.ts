import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Color2Component } from './color2.component';
import { DebugElement } from '@angular/core';
import {
  getElementByTestId,
  triggerEvent,
} from '../../testHelpers/test.helpers';

fdescribe('Color2Component', () => {
  let component: Color2Component;
  let fixture: ComponentFixture<Color2Component>;
  let el: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Color2Component],
    }).compileComponents();
    fixture = TestBed.createComponent(Color2Component);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have default Red Color', () => {
    const p = getElementByTestId(el, 'div');
    expect(p.styles['color']).toEqual('red');
  });
  it('should change color to yellow after click', () => {
    const p = getElementByTestId(el, 'div');
    triggerEvent(p, 'click');
    fixture.detectChanges();
    expect(p.styles['color']).toEqual('yellow');
  });
});

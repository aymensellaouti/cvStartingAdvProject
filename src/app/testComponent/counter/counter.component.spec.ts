import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import {
  getElementByTestId,
  triggerEvent,
} from '../../testHelpers/test.helpers';

fdescribe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have counter equal to 0', () => {
    expect(component.nb).toBe(0);
  });
  it('should have to show 0 as initial value', () => {
    const incrementBtn = el.query(By.css('[test-id =increment-btn]'));
    expect(incrementBtn).toBeTruthy();
    const counterP = el.query(By.css('[test-id =counter]'));
    fixture.detectChanges();
    expect(counterP.nativeElement.innerText).toContain(0);
  });
  it('should have to show 1 after click on increment', () => {
    const incrementBtn = el.query(By.css('[test-id =increment-btn]'));
    expect(incrementBtn).toBeTruthy();
    incrementBtn.triggerEventHandler('click', null);
    const counterP = el.query(By.css('[test-id =counter]'));
    fixture.detectChanges();
    expect(counterP.nativeElement.innerText).toBe('1');
  });
  it('should have to show -1 after click on decrement', () => {
    /*     const decrementBtn = el.query(By.css('[test-id=decrement-btn]'));*/
    const decrementBtn = getElementByTestId(el, 'decrement-btn');
    expect(decrementBtn).toBeTruthy();
    triggerEvent(decrementBtn, 'click');
    /* decrementBtn.triggerEventHandler('click', null); */
    /*     const counterP = el.query(By.css('[test-id =counter]')); */
    const counterP = getElementByTestId(el, 'counter');
    fixture.detectChanges();
    expect(counterP.nativeElement.innerText).toBe('-1');
  });
});

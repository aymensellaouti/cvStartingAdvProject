import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let el: DebugElement;
  let counter: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
    counter = el.query(By.css(`[data-testid=count]`));
  });

  it('CounterComponent exist', () => {
    expect(component).toBeTruthy();
  });
  it('increment counter by one when clic on + button', () => {
    //Act
    const incrementButton = el.query(By.css(`[data-testid=increment-button]`));
    incrementButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(counter.nativeElement.textContent).toBe('1');
  });
  it('decrement counter by one when clic on - button', () => {
    //Act
    const counter = el.query(By.css(`[data-testid=count]`));
    const decrementButton = el.query(By.css(`[data-testid=decrement-button]`));
    decrementButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(counter.nativeElement.textContent).toBe('-1');
  });
});

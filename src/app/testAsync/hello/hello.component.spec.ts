import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
  tick,
} from '@angular/core/testing';

import { HelloComponent } from './hello.component';
import { DebugElement } from '@angular/core';
import { getElementByTestId } from '../../testHelpers/test.helpers';

fdescribe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;
  let el: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelloComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should say Hello world with done', (done: DoneFn) => {
    const div = getElementByTestId(el, 'div');
    expect(div).toBeTruthy();
    setTimeout(() => {
      component.message = 'hello world';
      fixture.detectChanges();
      expect(el.nativeElement.textContent).toContain('hello world');
      done();
    }, 1000);
  });
  it('should say Hello world with fakeAsync', fakeAsync(() => {
    const div = getElementByTestId(el, 'div');
    expect(div).toBeTruthy();
    component.sayHello();
    tick(500);
    fixture.detectChanges();
    expect(el.nativeElement.textContent).toBe('');
    tick(500);
    fixture.detectChanges();
    expect(el.nativeElement.textContent).toContain('hello world');
  }));
  it('should say Hello world with fakeAsync and flush', fakeAsync(() => {
    const div = getElementByTestId(el, 'div');
    expect(div).toBeTruthy();
    component.sayHello();
    fixture.detectChanges();
    expect(el.nativeElement.textContent).toBe('');
    flush();
    fixture.detectChanges();
    expect(el.nativeElement.textContent).toContain('hello world');
  }));
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth2Component } from './auth2.component';
import { AuthTestService } from '../../services/auth-test.service';
import { DebugElement } from '@angular/core';

fdescribe('Auth2Component', () => {
  let component: Auth2Component;
  let fixture: ComponentFixture<Auth2Component>;
  let el: DebugElement;
  let compiled: any;
  let authservice: AuthTestService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Auth2Component],
      providers: [AuthTestService],
    }).compileComponents();

    fixture = TestBed.createComponent(Auth2Component);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    compiled = el.nativeElement;

    fixture.detectChanges();
    authservice = TestBed.inject(AuthTestService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display User logged when user is logged', () => {
    const loginSpy = spyOn(authservice, 'isAuthentified');
    loginSpy.and.returnValue(true);
    component.login();
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain('User Logged');
  });
  it('should display User not Logged when user is not logged', () => {
    const loginSpy = spyOn(authservice, 'isAuthentified');
    loginSpy.and.returnValue(false);
    component.login();
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain(
      'User not Logged'
    );
  });
});

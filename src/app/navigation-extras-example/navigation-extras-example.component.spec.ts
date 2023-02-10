import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationExtrasExampleComponent } from './navigation-extras-example.component';

describe('NavigationExtrasExampleComponent', () => {
  let component: NavigationExtrasExampleComponent;
  let fixture: ComponentFixture<NavigationExtrasExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationExtrasExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationExtrasExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

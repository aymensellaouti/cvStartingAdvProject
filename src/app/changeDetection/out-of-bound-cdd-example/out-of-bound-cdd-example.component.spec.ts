import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutOfBoundCDdExampleComponent } from './out-of-bound-cdd-example.component';

describe('OutOfBoundCDdExampleComponent', () => {
  let component: OutOfBoundCDdExampleComponent;
  let fixture: ComponentFixture<OutOfBoundCDdExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutOfBoundCDdExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutOfBoundCDdExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

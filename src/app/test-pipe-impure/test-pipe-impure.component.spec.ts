import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPipeImpureComponent } from './test-pipe-impure.component';

describe('TestPipeImpureComponent', () => {
  let component: TestPipeImpureComponent;
  let fixture: ComponentFixture<TestPipeImpureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPipeImpureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPipeImpureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

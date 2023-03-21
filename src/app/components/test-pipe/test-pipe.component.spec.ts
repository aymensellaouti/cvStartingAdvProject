import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPipeComponent } from './test-pipe.component';

describe('TestPipeComponent', () => {
  let component: TestPipeComponent;
  let fixture: ComponentFixture<TestPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestStructurelDirectiveComponent } from './test-structurel-directive.component';

describe('TestStructurelDirectiveComponent', () => {
  let component: TestStructurelDirectiveComponent;
  let fixture: ComponentFixture<TestStructurelDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestStructurelDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestStructurelDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

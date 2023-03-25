import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ColorUtComponent } from "./color-ut.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

fdescribe("ColorComponent", () => {
  let component: ColorUtComponent;
  let fixture: ComponentFixture<ColorUtComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorUtComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorUtComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have P with background Red", () => {
    /*
      Arrange
      Get the element
    */
    const p = debugElement.query(By.css("[data-testid=para]"));
    expect(p).toBeTruthy();
    expect(p.nativeElement.style["background-color"]).toBe("red");
  });
  it("should have P with background Yellow after clicking on it", () => {
    /*
      Arrange
      Get the element
    */
    const p = debugElement.query(By.css("[data-testid=para]"));
    expect(p).toBeTruthy();
    p.triggerEventHandler("click", null);
    fixture.detectChanges();
    expect(p.nativeElement.style["background-color"]).toBe("yellow");
  });
});

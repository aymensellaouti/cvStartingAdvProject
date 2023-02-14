import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
export const getElementByTestId = (
  el: DebugElement,
  identifier: string
): DebugElement => el.query(By.css(`[test-id=${identifier}]`));
export const triggerEvent = (el: DebugElement, eventName: string) => {
  el.triggerEventHandler(eventName, null);
};

import { FormGroup, ValidationErrors } from "@angular/forms";

export function cinFirstCarsValidator(
  form: FormGroup
): ValidationErrors | null {
  const age = form.get("age")!.value;
  const cin: string = form.get("cin")!.value;
  const cinSlice = +cin.slice(0, 2);
  if ((age > 60 && cinSlice > 19) || (age < 60 && cinSlice < 20)) {
    return { cinFirstCars: true };
  }
  return null;
}

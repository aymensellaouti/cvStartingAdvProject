import { Component, inject } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { tap } from "rxjs";
import { Router } from "@angular/router";
import { CvAsyncValidators } from "../../validators/unique-cin.validator";
import { cinFirstCarsValidator } from "../../validators/cin-first-cars.validators";
import {
  FormBuilder,
  FormControl,
  Validators,
  AbstractControl,
} from "@angular/forms";

@Component({
  selector: "app-add-cv",
  templateUrl: "./add-cv.component.html",
  styleUrls: ["./add-cv.component.css"],
})
export class AddCvComponent {
  minMaxRequired = Validators.compose([
    Validators.minLength(8),
    Validators.maxLength(8),
    Validators.required,
  ]);
  /*   formFg = new FormGroup({
    name: new FormControl("", [Validators.required]),
    firstname: new FormControl("Aymen", [Validators.required]),
    job: new FormControl("", [Validators.required]),
    path: new FormControl(""),
    cin: new FormControl("", [
      Validators.required,
      Validators.maxLength(8),
      Validators.minLength(8),
    ]),
    age: new FormControl(0, {
      nonNullable: true,
      validators: Validators.required,
      updateOn: "blur",
    }),
  }); */
  cvAsyncValidators = inject(CvAsyncValidators);
  form = this.formBuilder.group(
    {
      name: ["", Validators.required],
      firstname: ["", Validators.required],
      path: [""],
      job: ["", Validators.required],
      cin: [
        "",
        {
          validators: [Validators.required, Validators.pattern("[0-8]{8}")],
          asyncValidators: [this.cvAsyncValidators.uniqueCinValidator],
          updateOn: "blur",
        },
      ],
      age: [
        0,
        {
          nonNullable: true,
          validators: Validators.required,
          updateOn: "blur",
        },
      ],
    },
    {
      validators: [cinFirstCarsValidator],
      updateOn: "blur",
    }
  );
  constructor(
    private formBuilder: FormBuilder,
    private cvService: CvService,
    private router: Router
  ) {}
  onChange(value: string) {
    console.log(value);
  }
  addCv() {
    console.log(this.form.value);
    if (!this.form.value.path) {
      this.form.value.path = "";
    }
    this.cvService
      .addCv(this.form.value as Cv)
      .pipe(
        tap((cv) => {
          console.log(cv);
          this.router.navigate(["cv"]);
        })
      )
      .subscribe();
  }
  ngOnInit() {
    const ageInput = this.form.controls["age"];
    const pathInput = this.form.controls["path"];
    ageInput.valueChanges.subscribe((value) => {
      if (ageInput.value && ageInput.value < 18) {
        pathInput.disable({ emitEvent: false });
      } else if (pathInput.disabled) {
        pathInput.enable({ emitEvent: false });
      }
    });
  }

  get name(): AbstractControl {
    return this.form.get("name")!;
  }
  get firstname() {
    return this.form.get("firstname");
  }
  get age() {
    return this.form.get("age");
  }
  get job() {
    return this.form.get("job");
  }
  get path() {
    return this.form.get("path");
  }
  get cin(): AbstractControl {
    return this.form.get("cin")!;
  }
}

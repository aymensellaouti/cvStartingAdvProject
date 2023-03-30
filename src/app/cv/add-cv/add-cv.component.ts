import { Component, inject } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { tap, filter } from "rxjs";
import { Router } from "@angular/router";
import { CvAsyncValidators } from "../../validators/unique-cin.validator";
import { cinFirstCarsValidator } from "../../validators/cin-first-cars.validators";
import { FormGroup } from "@angular/forms";
import {
  FormBuilder,
  FormControl,
  Validators,
  AbstractControl,
  AbstractControlOptions,
  FormArray,
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
      skills: this.formBuilder.array([]),
      hobbies: this.formBuilder.array([]),
    },
    {
      validators: [cinFirstCarsValidator],
      updateOn: "blur",
    } as AbstractControlOptions
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
          localStorage.removeItem("AddCvForm");
        })
      )
      .subscribe();
  }
  ngOnInit() {
    const ageInput = this.form.controls["age"];
    const pathInput = this.form.controls["path"];
    this.form.valueChanges
      .pipe(filter(() => this.form.valid))
      .subscribe((value) => {
        localStorage.setItem("AddCvForm", JSON.stringify(value));
      });
    ageInput.valueChanges.subscribe((value) => {
      if (value && value < 18) {
        pathInput.disable({ emitEvent: false });
      } else if (pathInput.disabled) {
        pathInput.enable({ emitEvent: false });
      }
    });
    const formContent = localStorage.getItem("AddCvForm");
    if (formContent) {
      this.form.setValue(JSON.parse(formContent));
    }
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
  get skills(): FormArray {
    return this.form.get("skills")! as FormArray;
  }
  get hobbies(): FormArray {
    return this.form.get("hobbies")! as FormArray;
  }
  addSkill() {
    /* this.skills.controls; */
    const skillForm: FormGroup = this.formBuilder.group({
      skill: ["", [Validators.required]],
      level: ["", [Validators.required]],
    });
    this.skills.push(skillForm);
  }
  deleteSkill(i: number) {
    this.skills.removeAt(i);
  }
  addHobby() {
    /* this.skills.controls; */
    const hobbyControl: FormControl = new FormControl("hobby");
    this.hobbies.push(hobbyControl);
  }

  deleteHobby(i: number) {
    this.hobbies.removeAt(i);
  }
}

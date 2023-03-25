import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { CvService } from "./cv.service";
import { Cv } from "../model/cv";
import { API } from "../../../config/api.config";

let cvs: Cv[] = [];

fdescribe("CvService", () => {
  let service: CvService;
  let http!: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CvService);
    http = TestBed.inject(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should get all cvs", () => {
    /* Act */
    service.getCvs().subscribe((cvsResult) => (cvs = cvsResult));
    const req = http.expectOne(API.cv);
    req.flush(service.getFakeCvs());

    /* Assert */
    expect(req.request.method).toBe("GET");
    expect(cvs.length).toBe(2);
    expect(cvs[0].name).toBe("sellaouti");
  });
  afterEach(() => {
    http.verify();
  });
});

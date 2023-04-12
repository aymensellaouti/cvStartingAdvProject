import { createReducer, on } from "@ngrx/store";
import { Cv } from "../model/cv";
import { fromCvAction } from "./cv.action";
import { HttpErrorResponse } from "@angular/common/http";

export interface CvState {
  cvs: Cv[];
  error: string | null;
}

export const initialCvState: CvState = {
  cvs: [],
  error: null,
};

export const cvReducer = createReducer(
  initialCvState,
  on(fromCvAction.loadCvs, (state) => initialCvState),
  on(fromCvAction.cvsLoadedSuccess, (state, { cvs }) => ({
    ...state,
    cvs,
  })),
  on(fromCvAction.cvsLoadedFail, (state, { error }) => {
    return {
      ...state,
      error: (error as HttpErrorResponse).statusText,
    };
  })
);

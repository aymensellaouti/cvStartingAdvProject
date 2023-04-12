import { createReducer, on } from "@ngrx/store";
import { Cv } from "../model/cv";
import { fromCvAction } from "./cv.action";
import { HttpErrorResponse } from "@angular/common/http";
import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";

export interface CvState extends EntityState<Cv> {
  error: string | null;
}

export const initialCvState: CvState = {
  ids: [],
  entities: {},
  error: null,
};

export const cvAdapter: EntityAdapter<Cv> = createEntityAdapter<Cv>();

export const cvReducer = createReducer(
  initialCvState,
  on(fromCvAction.loadCvs, (state) => initialCvState),
  on(fromCvAction.cvsLoadedSuccess, (state, { cvs }) => {
    return cvAdapter.setAll(cvs, state);
  }),
  on(fromCvAction.cvsLoadedFail, (state, { error }) => {
    return {
      ...state,
      error: (error as HttpErrorResponse).statusText,
    };
  })
);

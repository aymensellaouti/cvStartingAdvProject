import { createReducer, on } from "@ngrx/store";
import { Cv } from "../model/cv";
import {
  fromCvAction,
  cvLoadedSuccessAction,
  fromCvDetailsAction,
  fromCvDeleteAction,
} from "./cv.action";
import { HttpErrorResponse } from "@angular/common/http";
import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";

export interface CvState extends EntityState<Cv> {
  error: string | null;
  selectedCv: Cv | null;
}

export const initialCvState: CvState = {
  ids: [],
  entities: {},
  selectedCv: null,
  error: null,
};

export const cvAdapter: EntityAdapter<Cv> = createEntityAdapter<Cv>();

export const { selectAll, selectEntities, selectIds, selectTotal } =
  cvAdapter.getSelectors();

export const cvReducer = createReducer(
  initialCvState,
  on(fromCvAction.loadCvs, (state) => initialCvState),
  on(fromCvAction.cvsLoadedSuccess, (state, { cvs }) => {
    return cvAdapter.setAll(cvs, state);
  }),
  on(fromCvDetailsAction.cvLoadedSuccess, (state, { cv }) => {
    return {
      ...state,
      selectedCv: cv,
    };
  }),
  on(fromCvDeleteAction.cvDeletedSuccess, (state, { id }) => {
    return cvAdapter.removeOne(id, state);
  }),
  on(fromCvDeleteAction.cvDeletedFail, (state, { error }) => {
    return {
      ...state,
      error: (error as HttpErrorResponse).statusText,
    };
  }),
  on(fromCvAction.cvsLoadedFail, (state, { error }) => {
    return {
      ...state,
      error: (error as HttpErrorResponse).statusText,
    };
  })
);

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CvState } from "./cv.reducers";

export const selectCvState = createFeatureSelector<CvState>("cv");
export const selectAllCvs = createSelector(selectCvState, (state) => state.cvs);
export const selectLoadingError = createSelector(
  selectCvState,
  (state) => state.error
);

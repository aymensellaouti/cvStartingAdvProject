import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CvState, cvAdapter } from "./cv.reducers";
export const selectCvState = createFeatureSelector<CvState>("cv");

export const selectAllCvs = createSelector(selectCvState, (state) =>
  cvAdapter.getSelectors().selectAll(state)
);
export const selectLoadingError = createSelector(
  selectCvState,
  (state) => state.error
);

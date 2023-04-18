import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CvState, cvAdapter } from "./cv.reducers";
import {
  selectRouteParam,
  selectRouteParams,
} from "src/app/state/router.selector";
export const selectCvState = createFeatureSelector<CvState>("cv");

export const selectAllCvs = createSelector(selectCvState, (state) =>
  cvAdapter.getSelectors().selectAll(state)
);
export const selectLoadingError = createSelector(
  selectCvState,
  (state) => state.error
);
export const selectCvDetails = createSelector(
  selectCvState,
  selectRouteParams,
  /* selectRouteParam("id"), */
  (state, { id }) => {
    if (id) return state.entities[id];
    return undefined;
  }
);

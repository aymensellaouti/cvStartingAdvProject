import { createAction, createReducer, on } from "@ngrx/store";
import { CvState, initialCvState } from "../cv/state/cv.reducers";

export const initStoreAction = createAction("[Home Component] Init App");

export interface AppState {
  appName: string;
  cv: CvState;
}

export const initialAppState: AppState = {
  appName: "My App",
  cv: initialCvState,
};

export const rootReducer = createReducer(
  initialAppState,
  on(initStoreAction, (state) => ({
    ...state,
    appName: "Cv Tech",
  }))
);

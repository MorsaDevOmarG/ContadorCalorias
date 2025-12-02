import { Activity } from "../types";

export type ActivityActions = {

};

type ActivityState = {
  activites: Activity[]
};

export const initialState : ActivityState = {
  activites: []
};

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions
) => {

};
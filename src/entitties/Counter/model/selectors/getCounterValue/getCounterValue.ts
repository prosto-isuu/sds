import {createSelector} from "@reduxjs/toolkit";
import {getCounter} from "../getCounter/getCounter";
import {StateSchema} from "../../../../../app/providers/StoreProvider";

export const getCounterValue = createSelector(
    getCounter,
    (state) => state.value
);
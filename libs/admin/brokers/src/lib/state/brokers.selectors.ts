import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  BROKERS_FEATURE_KEY,
  State,
  BrokersPartialState,
  brokersAdapter
} from './brokers.reducer';

// Lookup the 'Brokers' feature state managed by NgRx
export const getBrokersState = createFeatureSelector<
  BrokersPartialState,
  State
>(BROKERS_FEATURE_KEY);

const { selectAll, selectEntities } = brokersAdapter.getSelectors();

export const getBrokersLoaded = createSelector(
  getBrokersState,
  (state: State) => state.loaded
);

export const getBrokersError = createSelector(
  getBrokersState,
  (state: State) => state.error
);

export const getAllBrokers = createSelector(getBrokersState, (state: State) =>
  selectAll(state)
);

export const getBrokersEntities = createSelector(
  getBrokersState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getBrokersState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getBrokersEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

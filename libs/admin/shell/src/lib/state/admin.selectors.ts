import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ADMIN_FEATURE_KEY,
  State,
  AdminPartialState,
  adminAdapter
} from './admin.reducer';

// Lookup the 'Admin' feature state managed by NgRx
export const getAdminState = createFeatureSelector<AdminPartialState, State>(
  ADMIN_FEATURE_KEY
);

const { selectAll, selectEntities } = adminAdapter.getSelectors();

export const getAdminLoaded = createSelector(
  getAdminState,
  (state: State) => state.loaded
);

export const getAdminError = createSelector(
  getAdminState,
  (state: State) => state.error
);

export const getAllAdmin = createSelector(getAdminState, (state: State) =>
  selectAll(state)
);

export const getAdminEntities = createSelector(getAdminState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getAdminState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getAdminEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

import { createAction, props } from '@ngrx/store';
import { AdminEntity } from './admin.models';

export const loadAdmin = createAction('[Admin] Load Admin');

export const loadAdminSuccess = createAction(
  '[Admin] Load Admin Success',
  props<{ admin: AdminEntity[] }>()
);

export const loadAdminFailure = createAction(
  '[Admin] Load Admin Failure',
  props<{ error: any }>()
);

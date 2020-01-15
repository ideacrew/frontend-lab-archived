import { createAction, props } from '@ngrx/store';
import { BrokersEntity } from './brokers.models';

export const loadBrokers = createAction('[Brokers] Load Brokers');

export const loadBrokersSuccess = createAction(
  '[Brokers] Load Brokers Success',
  props<{ brokers: BrokersEntity[] }>()
);

export const loadBrokersFailure = createAction(
  '[Brokers] Load Brokers Failure',
  props<{ error: any }>()
);

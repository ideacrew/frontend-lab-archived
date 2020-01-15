import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromBrokers from './brokers.reducer';
import * as BrokersActions from './brokers.actions';

@Injectable()
export class BrokersEffects {
  loadBrokers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BrokersActions.loadBrokers),
      fetch({
        run: action => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return BrokersActions.loadBrokersSuccess({ brokers: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return BrokersActions.loadBrokersFailure({ error });
        }
      })
    )
  );

  constructor(private actions$: Actions) {}
}

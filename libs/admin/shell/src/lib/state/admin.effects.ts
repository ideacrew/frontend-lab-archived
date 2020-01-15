import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromAdmin from './admin.reducer';
import * as AdminActions from './admin.actions';

@Injectable()
export class AdminEffects {
  loadAdmin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.loadAdmin),
      fetch({
        run: action => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return AdminActions.loadAdminSuccess({ admin: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return AdminActions.loadAdminFailure({ error });
        }
      })
    )
  );

  constructor(private actions$: Actions) {}
}

import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromAdmin from './admin.reducer';
import * as AdminSelectors from './admin.selectors';

@Injectable({ providedIn: 'root' })
export class AdminFacade {
  loaded$ = this.store.pipe(select(AdminSelectors.getAdminLoaded));
  allAdmin$ = this.store.pipe(select(AdminSelectors.getAllAdmin));
  selectedAdmin$ = this.store.pipe(select(AdminSelectors.getSelected));

  constructor(private store: Store<fromAdmin.AdminPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}

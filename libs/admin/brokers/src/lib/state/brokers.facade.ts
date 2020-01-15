import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromBrokers from './brokers.reducer';
import * as BrokersSelectors from './brokers.selectors';

@Injectable({ providedIn: 'root' })
export class BrokersFacade {
  loaded$ = this.store.pipe(select(BrokersSelectors.getBrokersLoaded));
  allBrokers$ = this.store.pipe(select(BrokersSelectors.getAllBrokers));
  selectedBrokers$ = this.store.pipe(select(BrokersSelectors.getSelected));

  constructor(private store: Store<fromBrokers.BrokersPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}

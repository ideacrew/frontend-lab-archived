import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { BrokersEffects } from './brokers.effects';
import * as BrokersActions from './brokers.actions';

describe('BrokersEffects', () => {
  let actions: Observable<any>;
  let effects: BrokersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        BrokersEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore()
      ]
    });

    effects = TestBed.get(BrokersEffects);
  });

  describe('loadBrokers$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: BrokersActions.loadBrokers() });

      const expected = hot('-a-|', {
        a: BrokersActions.loadBrokersSuccess({ brokers: [] })
      });

      expect(effects.loadBrokers$).toBeObservable(expected);
    });
  });
});

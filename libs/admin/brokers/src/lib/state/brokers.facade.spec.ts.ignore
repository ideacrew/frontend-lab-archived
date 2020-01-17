import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { BrokersEntity } from './brokers.models';
import { BrokersEffects } from './brokers.effects';
import { BrokersFacade } from './brokers.facade';

import * as BrokersSelectors from './brokers.selectors';
import * as BrokersActions from './brokers.actions';
import {
  BROKERS_FEATURE_KEY,
  State,
  initialState,
  reducer
} from './brokers.reducer';

interface TestSchema {
  brokers: State;
}

describe('BrokersFacade', () => {
  let facade: BrokersFacade;
  let store: Store<TestSchema>;
  const createBrokersEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as BrokersEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(BROKERS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([BrokersEffects])
        ],
        providers: [BrokersFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(BrokersFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allBrokers$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(BrokersActions.loadBrokers());

        list = await readFirst(facade.allBrokers$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadBrokersSuccess` to manually update list
     */
    it('allBrokers$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allBrokers$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          BrokersActions.loadBrokersSuccess({
            brokers: [createBrokersEntity('AAA'), createBrokersEntity('BBB')]
          })
        );

        list = await readFirst(facade.allBrokers$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});

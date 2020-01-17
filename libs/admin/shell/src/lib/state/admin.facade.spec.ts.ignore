import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { AdminEntity } from './admin.models';
import { AdminEffects } from './admin.effects';
import { AdminFacade } from './admin.facade';

import * as AdminSelectors from './admin.selectors';
import * as AdminActions from './admin.actions';
import {
  ADMIN_FEATURE_KEY,
  State,
  initialState,
  reducer
} from './admin.reducer';

interface TestSchema {
  admin: State;
}

describe('AdminFacade', () => {
  let facade: AdminFacade;
  let store: Store<TestSchema>;
  const createAdminEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as AdminEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(ADMIN_FEATURE_KEY, reducer),
          EffectsModule.forFeature([AdminEffects])
        ],
        providers: [AdminFacade]
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
      facade = TestBed.get(AdminFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allAdmin$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(AdminActions.loadAdmin());

        list = await readFirst(facade.allAdmin$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadAdminSuccess` to manually update list
     */
    it('allAdmin$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allAdmin$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          AdminActions.loadAdminSuccess({
            admin: [createAdminEntity('AAA'), createAdminEntity('BBB')]
          })
        );

        list = await readFirst(facade.allAdmin$);
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

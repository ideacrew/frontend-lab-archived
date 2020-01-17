import { BrokersEntity } from './brokers.models';
import * as BrokersActions from './brokers.actions';
import { State, initialState, reducer } from './brokers.reducer';

describe('Brokers Reducer', () => {
  const createBrokersEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as BrokersEntity);

  beforeEach(() => {});

  describe('valid Brokers actions', () => {
    it('loadBrokersSuccess should return set the list of known Brokers', () => {
      const brokers = [
        createBrokersEntity('PRODUCT-AAA'),
        createBrokersEntity('PRODUCT-zzz')
      ];
      const action = BrokersActions.loadBrokersSuccess({ brokers });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

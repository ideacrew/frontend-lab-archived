import { BrokersEntity } from './brokers.models';
import { State, brokersAdapter, initialState } from './brokers.reducer';
import * as BrokersSelectors from './brokers.selectors';

describe('Brokers Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getBrokersId = it => it['id'];
  const createBrokersEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as BrokersEntity);

  let state;

  beforeEach(() => {
    state = {
      brokers: brokersAdapter.addAll(
        [
          createBrokersEntity('PRODUCT-AAA'),
          createBrokersEntity('PRODUCT-BBB'),
          createBrokersEntity('PRODUCT-CCC')
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true
        }
      )
    };
  });

  describe('Brokers Selectors', () => {
    it('getAllBrokers() should return the list of Brokers', () => {
      const results = BrokersSelectors.getAllBrokers(state);
      const selId = getBrokersId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = BrokersSelectors.getSelected(state);
      const selId = getBrokersId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getBrokersLoaded() should return the current 'loaded' status", () => {
      const result = BrokersSelectors.getBrokersLoaded(state);

      expect(result).toBe(true);
    });

    it("getBrokersError() should return the current 'error' state", () => {
      const result = BrokersSelectors.getBrokersError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

import { searchArray, searchObject, compareStrings } from './searchArray';

const brokers: any[] = [
  {
    _id: '5e1e4f39411f1df5de3b4df1',
    hbx_id: '10000019',
    staff_name: 'Jennifer Pinsker',
    current_status: 'Pending',
    agency: 'XYZ Agency',
    writing_agent: 'Broker Bob',
    history: [
      {
        date: '2020-01-14T00:00:00.000+00:00',
        status: 'Pending',
      },
    ],
  },
  {
    _id: '5e1e4f39411f1df5de3b4df2',
    hbx_id: '10000019',
    staff_name: 'Jennifer Pinsker',
    current_status: 'Linked',
    agency: 'XYZ Agency',
    writing_agent: 'Broker Dan',
    history: [
      {
        date: '2020-01-14T00:00:00.000+00:00',
        status: 'Pending',
      },
      {
        date: '2020-01-15T14:22:00.000+00:00',
        status: 'Linked',
      },
    ],
  },
  {
    _id: '5e1e4f39411f1df5de3b4df3',
    hbx_id: '10000019',
    staff_name: 'Jennifer Pinsker',
    current_status: 'Linked',
    agency: 'XYZ Agency',
    writing_agent: 'Broker Joe',
    history: [
      {
        date: '2020-01-13T21:34:00.000+00:00',
        status: 'Pending',
      },
      {
        date: '2020-01-15T14:22:00.000+00:00',
        status: 'Linked',
      },
    ],
  },
  {
    _id: '5e1e4f39411f1df5de3b4df4',
    hbx_id: '10000023',
    staff_name: 'Mary Pins',
    current_status: 'Pending',
    agency: 'IJK Insure Agency',
    writing_agent: 'Broker Janet',
    history: [],
  },
  {
    _id: '5e1e4f39411f1df5de3b4df5',
    hbx_id: '10000051',
    staff_name: 'John Smith',
    current_status: 'Linked',
    agency: 'Acme Insure Agency',
    writing_agent: 'Broker Boo',
    history: [],
  },
];

describe('Search through an array of objects for a given term', () => {
  it('should return all objects when there is no search term', () => {
    const matchingEntities: any[] = searchArray(brokers, '');

    expect(matchingEntities).toBe(brokers);
  });

  it('should return the first object with Broker Bob when Bob is the search term', () => {
    const matchingEntities: any[] = searchArray(brokers, 'Bob');

    expect(matchingEntities).toEqual(brokers.slice(0, 1));
  });

  it('should return an empty array when 234908uasdflkj is used as the search term', () => {
    const matchingEntities: any[] = searchArray(brokers, '234908uasdflkj');

    expect(matchingEntities).toEqual([]);
  });

  it('should return true when `smith` is used as the search term', () => {
    const matchingEntities: any[] = searchArray(brokers, 'smith');

    expect(matchingEntities).toEqual(brokers.slice(4, 5));
  });
});

describe('Search through an object for a given term', () => {
  it('should return true when a match is found in the object', () => {
    const obj = brokers[0];

    const containsSearchTerm = searchObject(obj, 'jennifer');

    expect(containsSearchTerm).toBe(true);
  });
});

describe('Check to see if a string includes a search term', () => {
  it('should return true if the string contains the search term', () => {
    expect(compareStrings('Jennifer Pinsker', 'jennifer')).toBe(true);
  });

  it('should return false if the string does not contain the search term', () => {
    expect(compareStrings('jennifer pinsker', 'bob')).toBe(false);
  });
});

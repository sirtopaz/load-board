// this is the same data

export const FIXTURES = [
  {
    id: '0001',
    origin: 'Akron, OH',
    destination: 'Biloxi, MS',
    date: '2019-08-01',
    value: 110000.0,
    equipment: 'V',
    locked: false,
    status: 'available'
  },
  {
    id: '0002',
    origin: 'St. Louis, MO',
    destination: 'Las Vegas, NV',
    date: '2019-08-01',
    value: 89000.0,
    equipment: 'V',
    locked: false,
    status: 'booked'
  },
  {
    id: '003',
    origin: 'Chicago, IL',
    destination: 'Hamburg, PA',
    date: '2019-08-02',
    value: 600000.0,
    equipment: 'R',
    locked: false,
    status: 'available'
  },
  {
    id: '004',
    origin: 'Chicago, IL',
    destination: 'Las Vegas, NV',
    date: '2019-08-02',
    value: 250000.0,
    equipment: 'R',
    locked: true,
    status: 'available'
  },
  {
    id: '005',
    origin: 'Galesburg, IL',
    destination: 'Des Moines, IA',
    date: '2019-08-01',
    value: 780000.0,
    equipment: 'V',
    locked: false,
    status: 'available'
  },
  {
    id: '006',
    origin: 'St. Charles, IL',
    destination: 'Boulder, CO',
    date: '2019-08-01',
    value: 100000.0,
    equipment: 'F',
    locked: false,
    status: 'booked'
  }
];

export const ACTIONS = {
  LIST: 'LOAD:list',
  LIST_RECIEVED: 'LOAD:list_received',
  GET: 'LOAD:get',
  GET_RECIEVED: 'LOAD:get_received',
  UPDATE: 'LOAD:update'
};

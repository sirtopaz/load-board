import PropTypes from 'prop-types';

export const STATUS_TYPES = ['available', 'booked'];

export const STATUS_OPTIONS = [
  { key: 'available', text: 'available', value: 'available' },
  { key: 'booked', text: 'booked', value: 'booked' }
];

export const EQUIPTMENT_TYPES = ['V', 'F', 'R'];

export const ITEM_PROP_TYPE = PropTypes.shape({
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  equipment: PropTypes.oneOf(EQUIPTMENT_TYPES).isRequired,
  locked: PropTypes.bool,
  status: PropTypes.oneOf(STATUS_TYPES).isRequired
});

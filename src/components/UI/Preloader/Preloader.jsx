import PropTypes from 'prop-types';
import { RingLoader } from 'react-spinners';

export const Preloader = ({ size, styles }) => (
  <RingLoader
    color="#cc6633"
    cssOverride={{
      display: 'block',
      margin: '0 auto',
      ...styles,
    }}
    size={size}
  />
);

Preloader.propTypes = {
  size: PropTypes.number,
  styles: PropTypes.object,
};

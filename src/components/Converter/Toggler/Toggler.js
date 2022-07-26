import PropTypes from 'prop-types';
import './toggler.scss';

function Toggler({ open, toggle }) {
  const cssClassNames = open ? 'toggler toggler--open' : 'toggler';

  return (
    <button className={cssClassNames} type="button" onClick={toggle}>
      =
    </button>
  );
}

Toggler.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Toggler;

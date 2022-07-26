import PropTypes from 'prop-types';
import './ConverterFooter.scss';

function ConverterFooter({ currency, value }) {
  return (
    <footer className="ConverterFooter">
      <h1 className="ConverterFooter-rate">{value}</h1>
      <h2 className="ConverterFooter-currency">{currency}</h2>
    </footer>
  );
}
ConverterFooter.propTypes = {
  value: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,

};

export default ConverterFooter;

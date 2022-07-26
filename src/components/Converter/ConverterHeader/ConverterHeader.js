import PropTypes from 'prop-types';
import './ConverterHeader.scss';

function ConverterHeader({ baseAmount, setBaseAmount }) {
  const handleChange = (e) => {
    setBaseAmount(e.target.value);
  };

  return (
    <header className="ConverterHeader">
      <h1 className="ConverterHeader-title">Converter</h1>
      <input
        className="ConverterHeader-subTitle"
        type="number"
        value={baseAmount}
        onChange={handleChange}
      />{' '} euros

    </header>
  );
}
ConverterHeader.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  setBaseAmount: PropTypes.func.isRequired,
};

export default ConverterHeader;

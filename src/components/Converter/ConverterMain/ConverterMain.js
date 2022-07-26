import PropTypes from 'prop-types';
import './ConverterMain.scss';

function ConverterMain({
  currencies, changeRate, search, setSearch
}) {
  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };
  return (
    <main className="ConverterMain">
      <input
        type="text"
        className="currencies-search"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
      { currencies.length ? (
        <ul>
          {currencies.map((currency) => (
            <li onClick={() => changeRate(currency.name, currency.rate)} id={currency.rate} key={currency.name} className="ConverterMain-currencies">{currency.name}</li>
          ))}
        </ul>
      )
        : (
          <ul>
            <li className="ConverterMain-currencies">
              Aucune devise trouvée
            </li>
          </ul>
        )}
    </main>
  );
}

ConverterMain.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    }).isRequired
  ),
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  changeRate: PropTypes.func.isRequired,
};

export default ConverterMain;

import React from 'react';
import currencies from 'src/data/currencies';
import ConverterFooter from './ConverterFooter/ConverterFooter';
import ConverterHeader from './ConverterHeader/ConverterHeader';
import ConverterMain from './ConverterMain/ConverterMain';
import Toggler from './Toggler/Toggler';
import './Converter.scss';

class Converter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      showCurrencyName: true,
      value: 1.665247,
      currency: 'Australian Dollar',
      baseAmount: 1,
      search: '',
    };

    this.changeRate = this.changeRate.bind(this);
    this.toggle = this.toggle.bind(this);
    this.setSearch = this.setSearch.bind(this);
    this.setBaseAmount = this.setBaseAmount.bind(this);
  }

  componentDidMount() {
    console.log('Hello, le composant converter est mounted');
    this.setPageTitleFromCurrency();

    document.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        this.setState({
          open: false,
        });
      }
      if (e.key === 'Enter') {
        this.setState({
          open: true,
        });
      }
    });
  }

  componentDidUpdate() {
    console.log('Le state a été mis à jour : update !');
    this.setPageTitleFromCurrency();
  }

  setSearch(search) {
    this.setState({
      search: search,
    });
  }

  setBaseAmount(baseAmount) {
    if (!isNaN(Number(baseAmount))) {
      this.setState({
        baseAmount: Number(baseAmount),
      });
    }
  }

  getFilteredCurrencies() {
    const { search } = this.state;

    return currencies.filter((currency) => currency.name.toLowerCase()
      .includes(search.toLowerCase()));
  }

  setPageTitleFromCurrency() {
    const { currency } = this.state;
    document.title = `Euro to ${currency}`;
  }

  changeRate(name, rate) {
    this.setState({
      currency: name,
      value: rate,
    });
  }

  toggle() {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  render() {
    const {
      open, showCurrencyName, currency, value, baseAmount, search
    } = this.state;
    const filteredCurrencies = this.getFilteredCurrencies();

    return (
      <div className="Converter">
        <ConverterHeader
          showCurrencyName={showCurrencyName}
          baseAmount={baseAmount}
          setBaseAmount={this.setBaseAmount}
        />
        <Toggler
          open={open}
          toggle={this.toggle}
        />
        {open && (
        <ConverterMain
          changeRate={this.changeRate}
          search={search}
          currencies={filteredCurrencies}
          setSearch={this.setSearch}
        />
        )}
        <ConverterFooter
          currency={currency}
          value={Math.round(value * baseAmount * 100) / 100}
        />
      </div>
    );
  }
}

export default Converter;

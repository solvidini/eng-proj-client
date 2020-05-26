import React from 'react';

const SearchInput = (props) => (
  <div className="input-container">
    <label className="input-container__label" htmlFor={props.id}>
      {props.label}
    </label>
    <input
      id={props.id}
      className="search"
      type="search"
      value={props.value}
      placeholder={props.placeholder}
      onChange={(event) => props.onChange(event, props.id)}
    />
    <div className="input-container__total">
      Znaleziono{' '}
      <span className="input-container__highlight">
        {props.totalProducts}
      </span>{' '}
      {props.totalProducts === 1
        ? 'produkt '
        : props.totalProducts > 1 && props.totalProducts < 5
        ? 'produkty '
        : 'produktów '}
      w czasie{' '}
      <span className="input-container__highlight">
        {props.requestTime ? props.requestTime.toFixed(2) / 1000 : '? '}
      </span>
      s.
    </div>
  </div>
);

export default SearchInput;

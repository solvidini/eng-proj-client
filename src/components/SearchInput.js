import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { writeCorrectly } from '../utils/utils';

const SearchInput = (props) => (
  <div className="input-container">
    <label className="input-container__label" htmlFor={props.id}>
      {props.label}
    </label>
    <div className="search-box">
      <input
        id={props.id}
        className="search"
        type="search"
        results="5"
        value={props.value}
        placeholder={props.placeholder}
        onChange={(event) => props.onChange(event, props.id)}
      />
      <FontAwesomeIcon icon="search" className="search-icon" />
    </div>
    <div className="input-container__total">
      Znaleziono{' '}
      <span className="input-container__highlight">
        {props.totalItems}
      </span>{' '}
      {writeCorrectly(props.id, props.totalItems) + ' '}w czasie{' '}
      <span className="input-container__highlight">
        {props.requestTime ? props.requestTime.toFixed(2) / 1000 : '? '}
      </span>
      s.
    </div>
  </div>
);

export default SearchInput;

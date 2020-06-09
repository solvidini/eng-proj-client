import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { writeCorrectly } from '../utils/utils';

const SearchInput = (props) => (
  <div className="input-container">
    <label className="input-container__label" htmlFor={props.id}>
      {props.label}
    </label>
    <div className="inputs">
      <input
        id={props.id}
        className="inputs__search"
        type="search"
        results="5"
        value={props.value}
        placeholder={props.placeholder}
        onChange={(event) => props.onChange(event, props.id)}
      />
      <FontAwesomeIcon icon="search" className="inputs__search-icon" />
      <input
        className="inputs__pagination"
        type="number"
        title="Liczba elementów na jedną stronę"
        placeholder="1 - 30"
        min="1"
        max="30"
        value={props.optionsValue}
        onChange={(event) => props.onOptionsChange(event)}
        onFocus={(event) => event.target.select()}
        onClick={(event) => event.target.select()}
      />
    </div>
    <div className="input-container__total">
      Znaleziono{' '}
      <span className="input-container__highlight">
        {props.totalItems}
      </span>{' '}
      {writeCorrectly(props.id, props.totalItems) + ' '}w czasie{' '}
      <span className="input-container__highlight">
        {props.requestTime
          ? (props.requestTime / 1000).toFixed(2)
          : '? '}
      </span>
      s.
    </div>
    <div className="input-container__total">
      Strona{' '}
      <span className="input-container__highlight">
        {props.page ? props.page : '1'}
      </span>
      /
      <span className="input-container__highlight">
        {props.allPages && props.allPages < Infinity ? props.allPages : '1'}
      </span>
    </div>
  </div>
);

export default SearchInput;

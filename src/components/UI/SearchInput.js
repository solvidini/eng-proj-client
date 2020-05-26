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
      onChange={(event) => props.onChange(event, props.id)}
    />
  </div>
);

export default SearchInput;

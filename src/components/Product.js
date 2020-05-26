import React from 'react';

const Product = (props) => {
  return (
    <div className="products__item">
      <div className="products__item-image">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={props.reference}
        >
          <img
            src={props.src}
            alt={props.category + ' ' + props.title}
          />
        </a>
      </div>
      <div className="products__item-content">
        <div className="products__item-group">
          <h2 className="products__item-category">{props.category}</h2>
          <h1 className="products__item-title">{props.title}</h1>
        </div>
        <div className="products__item-group">
          <span className="products__item-manufacturer">
            Producent: <b>{props.company}</b>
          </span>
        </div>
        <div className="products__item-group">
          <div className="products__item-reference">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.reference}
            >
              {props.reference}
            </a>
          </div>
        </div>
        <div className="products__item-group">
          {props.description && (
            <div className="products__item-description">
              {props.description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;

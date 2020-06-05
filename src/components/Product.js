import React from 'react';

import noImage from '../assets/images/no-image.png';

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
            src={props.src ? props.src : noImage}
            alt={props.category + ' ' + props.title}
          />
        </a>
      </div>
      <div className="products__item-content">
        <span className="products__item-effect">{props.title}</span>
        <div className="products__item-group">
          <h1 className="products__item-title">{props.title}</h1>
        </div>
        <div className="products__item-group">
          <span className="products__item-category">
            Kategoria: <b>{props.category}</b>
          </span>
        </div>
        <div className="products__item-group">
          <span className="products__item-manufacturer">
            Producent: <b>{props.company}</b>
          </span>
        </div>
        {props.description && (
          <div className="products__item-group">
            <div className="products__item-description">
              {props.description}
            </div>
          </div>
        )}
        {props.price && (
          <div className="products__item-price">{props.price}</div>
        )}
        <div className="products__item-reference">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={props.reference}
          >
            Link do producenta
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;

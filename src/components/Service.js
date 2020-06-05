import React from 'react';

import noImage from '../assets/images/no-image.png';

const Service = (props) => {
  return (
    <div className="services__item">
      <div className="services__item-image">
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
      <div className="services__item-content">
        <span className="services__item-effect">{props.company}</span>
        <div className="services__item-group">
          <h1 className="services__item-title">{props.title}</h1>
        </div>
        <div className="services__item-group">
          <h1 className="services__item-category">{props.category}</h1>
        </div>
        <div className="services__item-group">
          <div className="services__item-description">
            {props.description}
          </div>
        </div>
        <div className="services__item-company">{props.company}</div>
        <div className="services__item-reference">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={props.reference}
          >
            Link do usługi
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;

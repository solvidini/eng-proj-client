import React from 'react';

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
            src={props.src}
            alt={props.category + ' ' + props.title}
          />
        </a>
      </div>
      <div className="services__item-content">
        <span className="services__item-effect">{props.title}</span>
        <div className="services__item-group">
          <h2 className="services__item-category">{props.category}</h2>
          <h1 className="services__item-title">{props.title}</h1>
        </div>
        <div className="services__item-group">
          <span className="services__item-manufacturer">
            {props.company}
          </span>
        </div>
        <div className="services__item-group">
          {props.description && (
            <div className="services__item-description">
              {props.description}
            </div>
          )}
        </div>
        <div className="services__item-reference">
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

export default Service;

import React from 'react';

const Paginator = (props) => {
  let previousPages = [];
  let nextPages = [];
  for (let i = props.currentPage - 3; i < props.currentPage; i++) {
    if (i > 0) {
      previousPages.push(i);
    }
  }
  for (let i = props.currentPage + 1; i < props.currentPage + 4; i++) {
    if (i > 0 && i <= props.lastPage) {
      nextPages.push(i);
    }
  }
  return (
    <div className="paginator">
      <div className="paginator__controls">
        {props.currentPage > 1 && (
          <button
            className="paginator__controls-item"
            onClick={props.onPage.bind(this, 1)}
            title="Strona pierwsza"
          >
            {'<<'}
          </button>
        )}
        {props.currentPage > 1 && (
          <button
            className="paginator__controls-item"
            onClick={props.onPrevious}
            title="Strona poprzednia"
          >
            {'<'}
          </button>
        )}
        {previousPages.map((page) => (
          <button
            key={page}
            className="paginator__controls-item"
            onClick={props.onPage.bind(this, page)}
          >
            {page}
          </button>
        ))}
        <button className="paginator__controls-item paginator__controls-item--current">
          {props.currentPage}
        </button>
        {nextPages.map((page) => (
          <button
            key={page}
            className="paginator__controls-item"
            onClick={props.onPage.bind(this, page)}
          >
            {page}
          </button>
        ))}
        {props.currentPage < props.lastPage && (
          <button
            className="paginator__controls-item"
            onClick={props.onNext}
            title="Strona następna"
          >
            {'>'}
          </button>
        )}
        {props.currentPage < props.lastPage && (
          <button
            className="paginator__controls-item"
            onClick={props.onPage.bind(this, props.lastPage)}
            title="Strona ostatnia"
          >
            {'>>'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Paginator;

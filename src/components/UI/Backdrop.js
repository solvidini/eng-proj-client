import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) =>
  ReactDOM.createPortal(
    props.show ? (
      <div
        className={
          props.notVisible ? 'backdrop' : 'backdrop backdrop--visible'
        }
        onClick={props.clicked}
      ></div>
    ) : null,
    document.getElementById('backdrop-root')
  );

export default Backdrop;

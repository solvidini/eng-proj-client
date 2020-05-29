import React from 'react';

import Modal from './UI/Modal';

const ErrorHandler = (props) => (
  <>
    {props.error && (
      <Modal
        title="Wystąpił błąd"
        show={props.error}
        error={true}
        close={props.onHandle}
      >
        <p>{props.error.message}</p>
      </Modal>
    )}
  </>
);

export default ErrorHandler;

import * as ReactDOM from 'react-dom';

const root = document.getElementById("root");

export function ModalPortal(props) {
  return ReactDOM.createPortal(props.children, root);
}
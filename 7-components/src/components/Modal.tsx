import { ReactNode } from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  onClose?: () => void;
  children?: ReactNode;
  actionBar?: ReactNode;
};

const Modal = ({ onClose, actionBar, children }: ModalProps) => {
  const target = document.querySelector("#modal-container");
  if (!target) return null;

  return ReactDOM.createPortal(
    <div>
      {/* <div className="absolute inset-0 bg-gray-300 opacity-80" onClick={() => (onClose ? onClose() : null)}></div>
      <div className="absolute inset-40 p-10 bg-white"> */}
      <div className="fixed inset-0 bg-gray-300 opacity-80" onClick={() => (onClose ? onClose() : null)}></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {/* <h1>Modal</h1> */}
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    target
  );
};

export { Modal };

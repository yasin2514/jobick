import React from "react";

const Modal = ({modalId}) => {
  return (
    <>
      <dialog id={modalId} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Job title</h3>
          <p className="py-4">
            Add a job text details
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-success text-white">Save Changes</button>
              <button className="btn ms-5 btn-error text-white">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;

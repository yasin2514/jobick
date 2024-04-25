
const Modal = ({modalId}) => {
  return (
    <>
      <dialog id={modalId} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Job title</h3>
          <form className="space-y-3 my-3">
            <input
              type="text"
              placeholder="Type here Job Name"
              className="input input-bordered w-full "
            />
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Type Here Job Description"
            ></textarea>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-success text-white">
                Save Changes
              </button>
              <button className="btn ms-5 btn-error text-white">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;

import BreadCumb from "../../Components/BreadCumb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Jobs = () => {
  const notify = () => {
    toast.error("This is Error Message!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div className="p-5">
      <ToastContainer /> {/* Add this line */}
      <BreadCumb text1={"Advanced"} text2={"Toastr"}></BreadCumb>
      <div className="bg-white mt-10 rounded-md p-5 space-y-4">
        <h5 className="text-xl font-semibold text-black">Toastr</h5>
        <hr className="mt-4" />
        <button
          onClick={notify}
          className="text-white bg-red-600 rounded-md px-5 py-2 text-lg hover:bg-red-700 "
        >
          Error
        </button>
      </div>
    </div>
  );
};

export default Jobs;

import React from "react";
import BreadCumb from "../../Components/BreadCumb";
import Swal from "sweetalert2";

const Read = () => {
  const handleSweetWrong = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  };
  return (
    <div className="p-5">
      <BreadCumb text1={"Components"} text2={"Sweet Alert"}></BreadCumb>
      <div className="bg-white mt-10 rounded-md p-5 space-y-4">
        <h5 className="text-xl font-semibold text-black">Sweet Wrong</h5>
        <hr className="mt-4" />
        <button
          onClick={handleSweetWrong}
          className="text-white bg-red-600 rounded-md px-5 py-2 text-lg hover:bg-red-700 "
        >
          Sweet Wrong
        </button>
      </div>
    </div>
  );
};

export default Read;

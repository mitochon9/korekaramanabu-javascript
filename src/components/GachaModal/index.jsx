import classes from "src/components/GachaModal/GachaModal.module.css";

export const GachaModal = ({ result, showModal, setShowModal }) => {
  const closeModal = () => setShowModal(!showModal);
  return (
    <div
      id="overlay"
      onClick={closeModal}
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-40 duration-300 ${
        showModal === false ? "hidden" : ""
      }`}
    >
      <div
        id="content"
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full lg:w-3/4 h-1/2 lg:h-2/6 p-1 lg:p-8 bg-white ${
          showModal === false ? classes.off_modal : classes.on_modal
        }`}
      >
        <h1 className="absolute top-0 left-1/2 -translate-x-1/2 text-center text-2xl lg:text-4xl">
          Result
        </h1>
        <span
          className={`w-full h-full flex justify-center items-center text-4xl font-bold ${
            showModal === false ? classes.off_result : classes.on_result
          }`}
        >
          {result}
        </span>
        <button
          onClick={closeModal}
          className="btn btn_basic absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          閉じる
        </button>
      </div>
    </div>
  );
};

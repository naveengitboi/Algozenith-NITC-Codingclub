import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose }) => {
  const modalRef = React.createRef();

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-white p-8 max-w-md rounded shadow-lg" ref={modalRef}>
        <div className="flex justify-end">
          <button onClick={onClose}>Close</button>
        </div>
        <p>This is the modal content</p>
      </div>
    </div>
  );
};

const Ap = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <button onClick={handleOpenModal} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Ap;
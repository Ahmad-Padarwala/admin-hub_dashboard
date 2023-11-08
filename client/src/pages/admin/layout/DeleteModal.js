import React from "react";

const DeleteModal = ({ isOpen, onClose, onDelete }) => {
  return (
    <>
      <div className={`${isOpen ? "delete-modal" : "delete_modal_hidden"} `}>
        <div className="delete_modal_content">
          <h2>Delete Confirmation</h2>
          <p>Are you sure you want to delete this data?</p>
          <div>
            <button id="close-modal" onClick={onClose}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <button onClick={onDelete} id="delete-button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;

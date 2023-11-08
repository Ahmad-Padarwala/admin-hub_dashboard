import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../layout/Header";
import DeleteModal from "../layout/DeleteModal";

const BlogCategory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  //delete
  const openDeleteModal = (brandId) => {
    setSelectedCategoryId(brandId);
    setIsDeleteModalOpen(true);
  };
  const closeDeleteModal = () => {
    setSelectedCategoryId(null);
    setIsDeleteModalOpen(false);
  };
  const deleteCategory = () => {
    if (selectedCategoryId) {
      handleDelete(selectedCategoryId);
      closeDeleteModal();
    }
  };
  const handleDelete = () => {
    console.log("deleteId");
  };
  return (
    <>
      <section className="home-section">
        <Header />
        <div className="admin_page_top">
          <p className="admin_page_header">Blog Category</p>
          <p>
            <NavLink to="/dashboard">
              <i className="fa-solid fa-house"></i>
            </NavLink>
            <i className="fa-solid fa-angles-right"></i>
            <span>Blog Category</span>
          </p>
        </div>
        <div className="content_add_btn_section">
          <button type="button" onClick={openModal}>
            <i className="fa-solid fa-plus"></i>Add Category
          </button>
        </div>
        <div className="admin_category_table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>DESCRIPTION</th>
                <th>IMAGE</th>
                <th>ICON</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>title</td>
                <td>description</td>
                <td>image</td>
                <td>
                  icon
                  <span>
                    <button className="operation_btn" onClick={openEditModal}>
                      <i className="fa-solid fa-pen"></i>
                    </button>
                    <button className="operation_btn operation_delete_btn">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </span>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>title</td>
                <td>description</td>
                <td>image</td>
                <td>
                  icon
                  <span>
                    <button className="operation_btn" onClick={openEditModal}>
                      <i className="fa-solid fa-pen"></i>
                    </button>
                    <button className="operation_btn operation_delete_btn">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </span>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>title</td>
                <td>description</td>
                <td>image</td>
                <td>
                  icon
                  <span>
                    <button className="operation_btn" onClick={openEditModal}>
                      <i className="fa-solid fa-pen"></i>
                    </button>
                    <button className="operation_btn operation_delete_btn">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </span>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>title</td>
                <td>description</td>
                <td>image</td>
                <td>
                  icon
                  <span>
                    <button className="operation_btn" onClick={openEditModal}>
                      <i className="fa-solid fa-pen"></i>
                    </button>
                    <button
                      className="operation_btn operation_delete_btn"
                      onClick={openDeleteModal}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* add modal start */}
        <div
          className={`add_modal ${isModalOpen ? "open" : "add_modal_close"}`}
        >
          <div className="add_modal-content">
            <h2>Add Category</h2>
            <button
              type="button"
              className="modal_close_btn"
              onClick={closeModal}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div>
              <form>
                <div className="mb-3">
                  <label htmlFor="blog_title" className="modal_label">
                    Blog Title:-
                  </label>
                  <input
                    type="text"
                    id="blog_title"
                    name="blog_title"
                    className="modal_input"
                    placeholder="Enter Blog Title"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="blog_description" className="modal_label">
                    Blog Description:-
                  </label>
                  <textarea
                    type="text"
                    rows="5"
                    cols="70"
                    id="blog_description"
                    name="blog_description"
                    className="modal_input"
                    placeholder="Enter Blog Title"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="blog_image" className="modal_label">
                    Blog Image:-
                  </label>
                  <input
                    type="file"
                    id="blog_image"
                    name="blog_image"
                    className="modal_input"
                    placeholder="Enter Blog Title"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="blog_icon" className="modal_label">
                    Blog Icon:-
                  </label>
                  <input
                    type="file"
                    id="blog_icon"
                    name="blog_icon"
                    className="modal_input"
                    placeholder="Enter Blog Title"
                  />
                </div>
                <div className="mb-3">
                  <button type="submit" className="success_btn">
                    SAVE
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="success_btn cancel_btn"
                  >
                    CANCEL
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* add modal end */}

        {/* edit modal start */}
        <div className={`add_modal ${isEditModalOpen ? "open" : ""}`}>
          <div className="add_modal-content">
            <h2>EDIT Category</h2>
            <button
              type="button"
              className="modal_close_btn"
              onClick={closeEditModal}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div>
              <form>
                <div className="mb-3">
                  <label htmlFor="blog_title" className="modal_label">
                    Blog Title:-
                  </label>
                  <input
                    type="text"
                    id="blog_title"
                    name="blog_title"
                    className="modal_input"
                    placeholder="Enter Blog Title"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="blog_description" className="modal_label">
                    Blog Description:-
                  </label>
                  <textarea
                    type="text"
                    rows="5"
                    cols="70"
                    id="blog_description"
                    name="blog_description"
                    className="modal_input"
                    placeholder="Enter Blog Title"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="blog_image" className="modal_label">
                    Blog Image:-
                  </label>
                  <input
                    type="file"
                    id="blog_image"
                    name="blog_image"
                    className="modal_input"
                    placeholder="Enter Blog Title"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="blog_icon" className="modal_label">
                    Blog Icon:-
                  </label>
                  <input
                    type="file"
                    id="blog_icon"
                    name="blog_icon"
                    className="modal_input"
                    placeholder="Enter Blog Title"
                  />
                </div>
                <div className="mb-3">
                  <button type="submit" className="success_btn">
                    SAVE
                  </button>
                  <button
                    type="button"
                    className="success_btn cancel_btn"
                    onClick={closeEditModal}
                  >
                    CANCEL
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* edit modal end */}
        {/* delete modal */}
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onClose={closeDeleteModal}
          onDelete={deleteCategory}
        />
      </section>
    </>
  );
};

export default BlogCategory;

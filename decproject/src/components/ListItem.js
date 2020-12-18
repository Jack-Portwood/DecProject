import React from "react";
import Modal from "./Modal";

const ListItem = ({ student }) => {
  return (
    <div className = "student-container">
      <img className = "student-image-container" src={student.img} />
    </div>
  );
};

export default ListItem;

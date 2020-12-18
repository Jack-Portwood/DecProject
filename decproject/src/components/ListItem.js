import React from "react";
import Modal from "./Modal";

const ListItem = ({ student }) => {
  return (
    <li className = "student-container">
      <img className = "student-image-container" src={student.img} />
      <p className = "student-name-container">{student.name}</p>
    </li>
  );
};

export default ListItem;

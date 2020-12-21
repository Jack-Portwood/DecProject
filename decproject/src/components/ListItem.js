import React from "react";
import Modal from "./Modal";
import BackTile from "./BackTile"
import FrontTile from "./FrontTile"

const ListItem = ({ student }) => {
  return (
    <div className = "student-container">
      <FrontTile student={student}/>
      <BackTile student={student}/>
    </div>
  );
};

export default ListItem;

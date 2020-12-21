import React from "react";
import Modal from "./Modal";
import BackTile from "./BackTile"
import FrontTile from "./FrontTile"

const ListItem = ({ student }) => {
  return (
    <div className="outer-student-container">
    <div className = "student-container">
      <FrontTile student={student}/>
      <BackTile student={student}/>
    </div>
    </div>
  );
};

export default ListItem;

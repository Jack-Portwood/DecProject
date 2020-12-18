import React from "react";
import ListItem from "./ListItem"

const ListComponent = ({g17}) => {


  const classMates = g17.map((student, key ) => {
  return( <ListItem student={student} />)
})

  
  return (
    <div>
      <ul>{classMates}</ul>
    </div>
  );
};

export default ListComponent;


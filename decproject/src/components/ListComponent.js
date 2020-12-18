import React from "react";
import ListItem from "./ListItem"

const ListComponent = ({g17}) => {


  const classMates = g17.map((student, key ) => {
  return( <ListItem student={student} />)
})

  
  return (
    
      <div className="g17-list">
        {classMates}
      </div>
  );
};

export default ListComponent;


import React from "react";

const ListComponent = ({g17}) => {


  const classMates = g17.map((student, key ) => {
  return( <p>{student.name}</p>)
  })

  
  return (
    <div>
<h1>Hello</h1>
{classMates}

    </div>
  );
};

export default ListComponent;


import React, {useState, useEffect} from "react";
import ListComponent from "../components/ListComponent";

const MainContainer = () => {

const [g17, setG17] = useState([])


 const fetchFromDB = (url) => {
   fetch(url)
   .then((res) => res.json())
   .then(res => setG17(res))
 };

useEffect(() => {
  (fetchFromDB("http://localhost:4000/api/g17"))
}, []);

  return (
    <div className="main-container">

      <ListComponent g17 ={g17} />
    </div>
  )
};

export default MainContainer;

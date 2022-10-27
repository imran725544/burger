import React from "react";
import { useLocation } from "react-router-dom";
import Details from "../Components/Details";

const DetailScreens = (props) => {
  const location = useLocation();
  console.log(location);
  const data = location.state;
  console.log("data " + data);
//   const data2 = location.state;
//   console.log("data " + data2);
  

  return <Details data={data}  />;
};

export default DetailScreens;

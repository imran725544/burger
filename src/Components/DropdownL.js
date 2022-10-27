import React from "react";

const DropdownL = (props) => {
  const cityHandler = (e) => {
    e.preventDefault();
    console.log("Cityyyy dropdown ", e.target.value);

    props.city(e.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="row w-100">
        <div className="col-md-4">
          <select onChange={cityHandler}>
            {props.data?.map((e) => (
              <option value={e.cityName}>{e.cityName}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default DropdownL;

import React from "react";
import Geocode from "react-geocode";


Geocode.setApiKey("AIzaSyDVhBQ9G26oc8xcOIkvs3HaymM2_ivSghs");
Geocode.setLanguage("en");
Geocode.setRegion("es");
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug();

const DropdownL = (props) => {
  const cityHandler = (e) => {
    e.preventDefault();
    console.log("Cityyyy dropdown ", e.target.value);
    // Get latitude & longitude from address.
    Geocode.fromAddress(e.target.value).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log("lat and lang of the cityy is ",lat, lng);
        props.city({
         "lat": lat,
         "lng": lng
        });
      },
      (error) => {
        console.error("lat and lang error is ",error);
      }
    );

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

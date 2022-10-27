import React from "react";
import "./Details.css";
const Details = (props) => {
  return (
    <div className="container">
      <div className="con-inner my-5">
        <>
          <div className="d-flex">
            <div className="col-md-6 left">
              <div className="left1">
                <img
                  className="inner-img"
                  alt=""
                  src={props.data.images.grid}
                />
                <img
                  className="logo-img-inner"
                  src={props.data.businessLogo}
                  alt=""
                />
              </div>
            </div>

            <div className="col-md-6 right mx-5">
              <h4 className="b-inner">{props.data.title}</h4>
              <h3 className="t-inner">{props.data.businessName}</h3>
              {/* <h4 className="offer">{e.offer}</h4> */}
              <p className="line">{props.data.popupHeading}</p>
              <hr />
              <p className="line">
                Deal Validity:
                <span>{props.data.endDate}</span>
              </p>
              <hr />
              <button className="dis">{props.data.premiumText}</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Details;

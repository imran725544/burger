import React from "react";
// import { Link } from "react-router-dom";
import "./Burger.css";
import DropdownL from "./DropdownL";
import Loader from "./Spinner";

const Burger = (props) => {
  return props.loading ? (
    <Loader />
  ) : (
    <>
      <div className="container-fluid">
        <div className=" row w-100 p-3">
          {props.data?.map((e, index) => {
            return (
              <>
                <div
                  className="image-sec col-md-4"
                  key={e.id}
                  onClick={() => props.movetoDetail(e)}
                >
                  {/* <Link
                  to={{
                    pathname: "/Details",
                    state: {
                      data: {
                        image: e.images.grid,
                      },
                    },
                  }}
                > */}
                  <span className="brand-logo">
                    <img
                      className="logo-img"
                      key={index}
                      src={e.businessLogo}
                      alt=""
                    />
                  </span>
                  <span className="save">Saving Rs. {e.save}</span>
                  <img
                    className="b1"
                    key={index.id}
                    src={e.images.grid}
                    alt=""
                  />
                  <h4 className="burger-tii"> {e.businessName}</h4>
                  <div className="pic-cont">
                    <div className="title-con">
                      <h3 className="title1">{e.title} </h3>
                      <h5 className="valid">{e.location}</h5>
                    </div>
                    <div className="title-valid">
                      <h3 className="t-valid1"> {e.popupHeading}</h3>
                      <h3 className="td-valid">{e.endDate}</h3>
                    </div>
                  </div>
                  {/* </Link> */}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Burger;

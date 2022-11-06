import { useState, useEffect } from "react";
import React from "react-dom";
import { useNavigate } from "react-router-dom";
import Burger from "../Components/Burger";
import DropdownL from "../Components/DropdownL";

const BurgerSceen = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [city, setCity] = useState({
    lat: 0,
    lng: 0,
    // "cityId" :0
    // "state":
    // "cityId":"cityName"
  });
  const [isLoading, setIsLoading] = useState(false);

  // let long = run;

  console.log("Cityyyy current ", city);

  useEffect(() => {
    setIsLoading(true);

    console.log("Cityyyy use effect run");

    const fetchData = async () => {
      await fetch(
        `http://92.204.170.218/jdb/index.php/api/en/v3/listing/premium/all?os=android&city_id=5&lat=${city.lat}&lng=${city.lng}&nearby=true`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC85Mi4yMDQuMTcwLjIxOFwvamRiXC9pbmRleC5waHBcL2FwaVwvZW5cL2F1dGhcL2FjY2VzcyIsImlhdCI6MTY2Nzc2Mzg0MiwiZXhwIjoxNjcwMzU1ODQyLCJuYmYiOjE2Njc3NjM4NDIsImp0aSI6ImU5OHpHUjdYY2hZOFZyeUYiLCJzdWIiOjQsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.HewV3mSl1V2Zx5oe5NZXD2K0FQX-bAXi1Yxk1IpQe-Y",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          //if (city === "") {
          setData(data.results);
          setIsLoading(false);
          //} else {
          //   const filterData = data.results.filter((data) =>
          //     data.location.includes(city)
          //   );
          //   setData(filterData);
          //   setIsLoading(false);
          // }
        })

        .catch((err) => console.log("api error " + err));
    };

    fetchData();
  }, [city]);

  useEffect(() => {
    const Data = async () => {
      await fetch(
        `http://92.204.170.218/jdb/index.php/api/en/v3/cities?os=android/listing/premium/all?os=android&{city_id}lat=&lng=0&nearby=true`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC85Mi4yMDQuMTcwLjIxOFwvamRiXC9pbmRleC5waHBcL2FwaVwvZW5cL2F1dGhcL2FjY2VzcyIsImlhdCI6MTY2Nzc2Mzg0MiwiZXhwIjoxNjcwMzU1ODQyLCJuYmYiOjE2Njc3NjM4NDIsImp0aSI6ImU5OHpHUjdYY2hZOFZyeUYiLCJzdWIiOjQsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.HewV3mSl1V2Zx5oe5NZXD2K0FQX-bAXi1Yxk1IpQe-Y",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setData2(data.results);
          console.log(data);
        })
        .catch((err) => console.log("cities api error " + err));
    };

    Data();
  }, []);

  const movetoDetail = (e) => {
    // console.warn("ppressed", e);
    navigate("/DetailScreens", {
      state: e,
    });
  };

  return (
    <>
      <DropdownL data={data2} city={setCity} />
      <Burger data={data} movetoDetail={movetoDetail} loading={isLoading} />
    </>
  );
  // return <Burger />;
};

export default BurgerSceen;

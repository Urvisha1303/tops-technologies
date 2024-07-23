import React, { useEffect, useState } from "react";
import "./Header.css";
import CountryDeatils from "./CountryDeatils";

const Header = () => {
  // const getData = () =>

  const [data, setData] = useState(null);
  const [random, setRandom] = useState(0);

  const selectCountry = () => {
    const randomIndex = Math.floor(Math.random() * 250);
    setRandom(randomIndex);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  if (!data) {
    return <></>;
  }

  return (
    <div>
      <CountryDeatils country={data[random]} />
      {/* <div className="box">
        <div className="img">Image</div>
        <div className="name">name</div>
        <div className="details">Capital :{data[random].capital[0]}</div>
        <div className="details">Language : </div>
        <div className="details">Population : </div>
        <div className="details">Currency : </div>
      </div> */}
      <button
        onClick={() => {
          selectCountry();
        }}
      >
        Select Country
      </button>
    </div>
  );
};

export default Header;

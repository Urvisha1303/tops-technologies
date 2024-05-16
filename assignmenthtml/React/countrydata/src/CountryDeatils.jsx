import React from 'react'

const CountryDeatils = ({ country }) => {
  return (
    <div>
        <div className="box">
        <div className="img"><img src={country.flags.png} alt=""   className="img"/></div>
        <div className="name">{country.name.common}</div>
        <div className="details">Capital :{country.capital[0]}</div>
        <div className="details">Language :{Object.values(country.languages || {}).join(" , ")}</div>
        <div className="details">Population :{country.population} </div>
        <div className="details">Currency :{Object.values(country.currencies|| {}).map(Currency=>Currency.name).join(",")}</div>
        
      </div>
    </div>
  )
}

export default CountryDeatils
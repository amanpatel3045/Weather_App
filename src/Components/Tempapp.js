import React, { useEffect, useState } from "react";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Delhi");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b98f8067988bdc3429e3302e332b129b`;
      const response = await fetch(url);
      // console.log(response);
      const resInJson = await response.json();
      // console.log(resInJson);
      setCity(resInJson.main);
    };

    fetchApi();
  }, [search]);

  return (
    <>
    <div style={{backgroundColor: "lightblue",width:"20%",margin:"auto",height:"40%" }} >
      <div className="parent">
        <div className="inputBox">
          <input
          style={{height:"34px",width:"200px"}}
            type="search"
            value={search}
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value)
            }}
          />
        </div>
      </div>
      {!city ? (
        <p className="errorMessage">NO DATA FOUND</p>
      ) : (
        <div className="info">
          <h2 className="location">{search}</h2>
          <h1 className="temp">{city.temp}celcius</h1>
          <h3 className="min_max">Min:{city.temp_min}|Max:{city.temp_max}</h3>
        </div>
      )}
      </div>
    </>
  );
};
export default Tempapp;

import { GrLocation } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";
import MainWeather from "./components/MainWeather";
import { useEffect, useState } from "react";
import { getData } from "./utils/api";
import { IResponce } from "./interfaces/IWeather";
import AddictionalInfo from "./components/AddictionalInfo";
import {
  getCityFromLocalStorage,
  removeCityFromLocalStorage,
  setCityToLocalStorage
} from "./utils/localStorage";

const App = () => {
  const [weather, setWeather] = useState<IResponce>();
  const [city, setCity] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const lastCity = getCityFromLocalStorage();
    lastCity ? getData(lastCity).then((res) => setWeather(res)) : null;
  }, []);

  // Getting weather from api
  useEffect(() => {
    async function getWeatherFromApi() {
      try {
        const res = city ? await getData(city) : null;
        setWeather(res);
        setNotFound(false);
        setCityToLocalStorage(city);
      } catch (error) {
        setNotFound(true);
        removeCityFromLocalStorage();
      }
    }
    getWeatherFromApi();
  }, [city]);

  return (
    <div className="bg-white  px-3 py-6  overflow-hidden flex flex-col items-center w-[100vw] h-[100vh] md:h-[80vh] md:rounded-[5%] lg:w-[550px] lg:rounded-[10%]">
      <header className="w-full max-w-[400px]">
        <form
          action=""
          className="flex justify-between items-center p-3 rounded-2xl min-h-[50px] shadow-lg relative">
          <input
            type="text"
            name="search__input"
            placeholder="Search city:"
            maxLength={24}
            className=" flex-auto min-h-[30px] pl-6 outline-none"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />

          <label htmlFor="search__input" className="absolute left-2">
            <GrLocation size="1.5em"></GrLocation>
          </label>
          <button
            className="flex items-center justify-center rounded-[50%] p-2 bg-gray-200 ml-1"
            onClick={(e) => {
              e.preventDefault();
              setCity(inputValue);
            }}>
            <AiOutlineSearch size="1.5em"></AiOutlineSearch>
          </button>
        </form>
      </header>
      <main className="flex flex-col justify-center h-full">
        {weather ? (
          notFound ? (
            <div className="font-bold text-3xl">
              There is no city named: {city}
            </div>
          ) : (
            <>
              <MainWeather
                city={weather?.location.name}
                temperature={weather?.current.temp_c.toFixed()}
                img={weather?.current.condition.icon}
              />
              <AddictionalInfo
                humidity={weather?.current.humidity}
                windspeed={weather?.current.wind_kph.toFixed()}></AddictionalInfo>
            </>
          )
        ) : (
          <div className="font-bold text-3xl">
            You can search for your city :)
          </div>
        )}
      </main>
    </div>
  );
};

export default App;

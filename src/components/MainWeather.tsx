import { FC } from "react";

interface MainWeatherProps {
  city?: string;
  temperature?: string;
  img?: string;
}

const MainWeather: FC<MainWeatherProps> = ({ city, temperature, img }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[200px] h-[200px]">
        <img src={img} alt="" className="w-full h-full object-contain" />
      </div>
      <div className=" mt-1 text-center">
        <h2 className=" font-bold text-5xl mb-2">{city}</h2>
        <span className=" font-bold text-2xl">{temperature} °C</span>
      </div>
    </div>
  );
};

export default MainWeather;

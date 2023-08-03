import { FC } from "react";
import humidityIcon from "../assets/humidity.png";
import windspeedIcon from "../assets/wind.png";

interface AddictionalInfoProps {
  humidity?: number;
  windspeed?: string;
}

const AddictionalInfo: FC<AddictionalInfoProps> = ({ humidity, windspeed }) => {
  return (
    <div className="flex flex-col md:justify-between md:flex-row gap-10 mt-10">
      <div className="flex items-center gap-1">
        <div className="w-[60px]">
          <img src={humidityIcon} alt="" className="max-w-full" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-xl">{humidity}%</span>
          <span className=" text-lg">Humidity</span>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <div className="w-[60px]">
          <img src={windspeedIcon} alt="" className="max-w-full" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-xl">{windspeed} km/h</span>
          <span className=" text-lg">Wind Speed</span>
        </div>
      </div>
    </div>
  );
};

export default AddictionalInfo;

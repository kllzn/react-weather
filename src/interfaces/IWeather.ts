export interface ICurrentWeather {
  condition: ICondition;
  feelslike_c: number;
  feelslike_f: number;
  humidity: number;
  is_day: number;
  temp_c: number;
  temp_f: number;
  wind_kph: number;
}

export interface ICondition {
  icon: string;
  text: string;
}

export interface ILocation {
  country: string;
  name: string;
}

export interface IResponce {
  current: ICurrentWeather;
  location: ILocation;
}

import { useState, useEffect } from "react";
import Image from "next/image";
import { dayIcons, nightIcons } from "@/data/weather-data";

const weatherEndpoints = [
  {
    name: "Amsterdam",
    latitude: 52.37,
    longitude: 4.89,
  },
  {
    name: "Berlin",
    latitude: 52.5244,
    longitude: 13.4105,
  },
];

const WeatherWidget = () => {
  const [currentLocation, setCurrentLocation] = useState(0);
  const [weatherData, setWeatherData] = useState(null);
  const [currentHours, setCurrentHours] = useState("");
  const [currentMinutes, setCurrentMinutes] = useState("");

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`,
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setWeatherData(data.current_weather);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData(
      weatherEndpoints[currentLocation].latitude,
      weatherEndpoints[currentLocation].longitude,
    );
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentHours(
        now.toLocaleTimeString([], { hour: "2-digit", hour12: false }),
      );
      setCurrentMinutes(now.toLocaleTimeString([], { minute: "2-digit" }));
    }, 1000);

    const locationInterval = setInterval(() => {
      setCurrentLocation(
        (prevLocation) => (prevLocation + 1) % weatherEndpoints.length,
      );
    }, 900000);

    return () => {
      clearInterval(intervalId);
      clearInterval(locationInterval);
    };
  }, [currentLocation]);

  const getWeatherIcon = (code, isDay) => {
    return isDay ? dayIcons[code] : nightIcons[code];
  };

  return (
    <div id="weather-widget">
      {weatherData && (
        <div className="weather-widget flex">
          <div className="mr-3">{weatherEndpoints[currentLocation].name}</div>
          <div className="mr-3">{weatherData.temperature}°C</div>
          <div className="mr-3">
            {currentHours}
            <span className="animate-pulse">:</span>
            {currentMinutes}
          </div>
          <div>
            <Image
              src={getWeatherIcon(weatherData.weathercode, weatherData.is_day)}
              alt="Weather icon"
              className="mt-[3.5px] h-[15.2px] w-[16px]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicEffect";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { dayIcons, nightIcons } from "@/data/weather-data";

gsap.registerPlugin(ScrollTrigger);

const WeatherWidget = () => {
  const [amsterdamWeather, setAmsterdamWeather] = useState(null);
  const [berlinWeather, setBerlinWeather] = useState(null);
  const [newYorkWeather, setNewYorkWeather] = useState(null);
  const [currentHours, setCurrentHours] = useState("");
  const [currentMinutes, setCurrentMinutes] = useState("");
  const st1 = useRef(null);
  const st2 = useRef(null);
  const st3 = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let targets = [st1.current, st2.current, st3.current];
      gsap.set("#weather-widget div", { autoAlpha: 1 });
      let animation = gsap.timeline({ repeat: -1 });

      let duration = 1;
      let pause = 2.5;
      let stagger = duration + pause;
      let repeatDelay = stagger * (targets.length - 1) + pause;

      animation
        .from(targets, {
          y: 8,
          duration: duration,
          opacity: 0,
          stagger: {
            each: stagger,
            repeat: -1,
            repeatDelay: repeatDelay,
          },
        })
        .to(
          targets,
          {
            y: -8,
            duration: duration,
            opacity: 0,
            stagger: {
              each: stagger,
              repeat: -1,
              repeatDelay: repeatDelay,
            },
          },
          stagger,
        );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  const fetchWeatherData = async (location) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current_weather=true&timezone=auto`,
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data.current_weather;
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const getTimeInTimeZone = (timeZone, type) => {
    return new Intl.DateTimeFormat("en-US", {
      [type]: "2-digit",
      hour12: false,
      timeZone: timeZone,
    }).format(new Date());
  };

  useEffect(() => {
    const fetchAllWeatherData = async () => {
      const amsterdamData = await fetchWeatherData({
        latitude: 52.37,
        longitude: 4.89,
      });
      setAmsterdamWeather(amsterdamData);
      const berlinData = await fetchWeatherData({
        latitude: 52.5244,
        longitude: 13.4105,
      });
      setBerlinWeather(berlinData);
      const newYorkData = await fetchWeatherData({
        latitude: 40.7143,
        longitude: -74.006,
      });
      setNewYorkWeather(newYorkData);
    };

    fetchAllWeatherData();

    const weatherIntervalId = setInterval(() => {
      fetchAllWeatherData();
    }, 900000);

    const intervalId = setInterval(() => {
      setCurrentHours({
        amsterdam: getTimeInTimeZone("Europe/Amsterdam", "hour"),
        berlin: getTimeInTimeZone("Europe/Berlin", "hour"),
        newYork: getTimeInTimeZone("America/New_York", "hour"),
      });
      setCurrentMinutes({
        amsterdam: getTimeInTimeZone("Europe/Amsterdam", "minute"),
        berlin: getTimeInTimeZone("Europe/Berlin", "minute"),
        newYork: getTimeInTimeZone("America/New_York", "minute"),
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
      clearInterval(weatherIntervalId);
    };
  }, []);

  const getWeatherIcon = (code, isDay) => {
    return isDay ? dayIcons[code] : nightIcons[code];
  };

  return (
    <div
      id="weather-widget"
      className="flex justify-center items-center relative overflow-hidden"
    >
      <div className="flex opacity-0" ref={st1}>
        <div className="mr-3">AMS</div>
        {amsterdamWeather && (
          <>
            <div className="mr-3">{amsterdamWeather.temperature}°C</div>
            <div className="mr-3">
              {currentHours.amsterdam}
              <span className="animate-pulse">:</span>
              {currentMinutes.amsterdam}
            </div>
            <Image
              src={getWeatherIcon(
                amsterdamWeather.weathercode,
                amsterdamWeather.is_day,
              )}
              alt="Weather icon"
              className="mt-[3.5px] h-[15.2px] w-[16px]"
            />
          </>
        )}
      </div>
      <div className="flex absolute opacity-0" ref={st2}>
        <div className="mr-3">NYC</div>
        {newYorkWeather && (
          <>
            <div className="mr-3">{newYorkWeather.temperature}°C</div>
            <div className="mr-3">
              {currentHours.newYork}
              <span className="animate-pulse">:</span>
              {currentMinutes.newYork}
            </div>
            <Image
              src={getWeatherIcon(
                newYorkWeather.weathercode,
                newYorkWeather.is_day,
              )}
              alt="Weather icon"
              className="mt-[3.5px] h-[15.2px] w-[16px]"
            />
          </>
        )}
      </div>
      <div className="flex absolute opacity-0" ref={st3}>
        <div className="mr-3">BER</div>
        {berlinWeather && (
          <>
            <div className="mr-3">{berlinWeather.temperature}°C</div>
            <div className="mr-3">
              {currentHours.berlin}
              <span className="animate-pulse">:</span>
              {currentMinutes.berlin}
            </div>
            <Image
              src={getWeatherIcon(
                berlinWeather.weathercode,
                berlinWeather.is_day,
              )}
              alt="Weather icon"
              className="mt-[3.5px] h-[15.2px] w-[16px]"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherWidget;
